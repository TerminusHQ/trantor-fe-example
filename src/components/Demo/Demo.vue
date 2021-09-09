<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
      <div><MyButton :ctx="ctx" /></div>
    <a-form-item label="Note">
      <a-input
        v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item label="Gender">
      <a-select
        v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          male
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<!-- 这边使用 lang 为 ts -->
<script lang="ts">
import Vue from 'vue';
import Antd from 'ant-design-vue';
import MyButton from './Button.vue'
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

export default {
  props: {
  	// this.props 属性中可以拿到原 container 中的所有属性方法  
    ctx: Object
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  mounted() {
    console.log('container context', this.ctx)
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
  components: {
    MyButton: MyButton,
  }
};
</script>