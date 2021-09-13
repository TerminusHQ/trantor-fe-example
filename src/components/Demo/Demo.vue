<template>
  <Form
    :form="form"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 12 }"
    @submit="handleSubmit"
  >
    <div><MyButton :ctx="ctx" /></div>
    <Item label="Note">
      <Input
        v-decorator="[
          'note',
          { rules: [{ required: true, message: 'Please input your note!' }] },
        ]"
      />
    </Item>
    <Item label="Gender">
      <Select
        v-decorator="[
          'gender',
          {
            rules: [{ required: true, message: 'Please select your gender!' }],
          },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <Option value="male"> male </Option>
        <Option value="female"> female </Option>
      </Select>
    </Item>
    <Item :wrapper-col="{ span: 12, offset: 5 }">
      <Button type="primary" html-type="submit"> Submit </Button>
    </Item>
  </Form>
</template>

<!-- 这边使用 lang 为 ts -->
<script lang="ts">
import { Form, Select, Input, Button } from "ant-design-vue";
import MyButton from "./Button.vue";
import "ant-design-vue/dist/antd.css";

export default {
  props: {
    // this.props 属性中可以拿到原 container 中的所有属性方法
    ctx: Object,
  },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  mounted() {
    console.log("container context", this.ctx);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },
  },
  components: {
    MyButton: MyButton,
    Form: Form,
    Item: Form.Item,
    Input: Input,
    Select: Select,
    Option: Select.Option,
    Button: Button
  },
};
</script>