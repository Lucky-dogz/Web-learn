<template>
  <!-- 用户表单 -->
  <div class="manage">
    <!-- 添加用户的对话表单 -->
    <!-- 传递属性时如果没有.sync修饰符，默认不允许在子组件中修改属性 -->
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible="isShow"
    >
      <!-- 将数据传给CommonForm组件
      formLabel用于传递表单组成数据，form用于存储所填写数据，inline控制表单元素是否为行内-->
      <CommonForm
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      ></CommonForm>
      <!-- 取消和确定对话框 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>

    <!-- *************************************************************************************** -->

    <!-- 头部表单 -->
    <div class="manage-header">
      <el-button type="primary" @click="addUser"> + 新增</el-button>
      <CommonForm
        :formLabel="FormLabel"
        :form="searchForm"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getList(searchForm.keyword)"
          >搜索</el-button
        >
      </CommonForm>
    </div>
    <!-- 用户信息表 -->
    <CommonTable
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="deleteUser"
    ></CommonTable>
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue";
import CommonTable from "@/components/CommonTable.vue";
// 引入getUser接口
import { getUser } from "../../../api/data";
export default {
  name: "USer",
  components: { CommonForm, CommonTable },
  data() {
    return {
      operateType: "add",
      isShow: false,
      // 对话表单数据
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 0,
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "addr",
          label: "地址",
          type: "input",
        },
      ],
      // 收集表单各项数据
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      },
      // 搜索表单
      FormLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      // 搜索关键词
      searchForm: {
        keyword: "",
      },
      /************************************************************** */
      tableData: [],
      // 列名
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "sexLabel",
          label: "性别",
        },
        {
          prop: "birth",
          label: "出生日期",
          width: 200,
        },
        {
          prop: "addr",
          label: "地址",
          width: 320,
        },
      ],
      // 分页配置
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    // 确认按钮
    confirm() {
      // 如果是编辑状态
      if (this.operateType === "edit") {
        this.$http.post("/user/edit", this.operateForm).then(() => {
          this.isShow = false;
          this.getList();
        });
      }
      // 如果是新增状态
      else {
        this.$http.post("/user/add", this.operateForm).then(() => {
          this.isShow = false;
          this.getList();
        });
      }
    },
    // 添加用户
    addUser() {
      // 各种初始化
      this.isShow = true;
      this.operateType = "add";
      this.operateForm = {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      };
    },
    /* 得到用户列表、刷新列表
    name = ""意思是默认值,没有传进来的话,默认空 */
    getList(name = "") {
      name ? (this.config.page = 1) : "";
      getUser({
        page: this.config.page,
        name,
      }).then((res) => {
        // 将拿到的数据赋值tableData
        this.tableData = res.data.list.map((item) => {
          // 将数据中性别的0/1转换成女/男
          item.sexLabel = item.sex === 0 ? "女" : "男";
          return item;
        });
        // 设置分页栏总页数
        this.config.total = res.data.count;
      });
    },
    // 编辑用户
    editUser(row) {
      this.operateType = "edit";
      this.isShow = true;
      this.operateForm = row;
      /* 编辑页面修改数据导致原来数据也被更改了，
      原因是子组件Table的edit监听事件传出来的row是table中一整行的数据，
      该数据是Object类型，共享堆空间，
      因此在User组件中不能简单的this.operateForm = row，
      要进行深浅拷贝，这里浅拷贝也行，this.operateForm={...row} */
      this.operateForm = { ...row };
    },
    // 删除用户
    deleteUser(row) {
      this.$confirm("此操作将永久删除该组件,是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = row.id;
        this.$http
          .get("/user/del", {
            params: { id },
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功",
            });
            this.getList();
          });
      });
    },
  },
  // 组件创建前得到数据
  created() {
    this.getList();
  },
};
</script>
<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.manage {
  height: 90%;
  padding-bottom: 20px;
  overflow: hidden;
  &header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>