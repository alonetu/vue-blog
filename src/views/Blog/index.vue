<template>
  <div class="blog">
    <div class="header">
      <el-input
        v-model="keyword"
        placeholder="输入关键字搜索"
        :suffix-icon="Search"
        style="width: 240px; margin: 0 8px 0 0"
        @keyup.enter="search"
        clearable
      />
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <div class="blog-content">
      <el-table
        :data="blogList.data"
        v-loading="tableLoading"
        border
        style="width: 100%"
      >
        <el-table-column label="作者" width="180">
          <template v-slot="scope">
            <div v-html="setHeighLight(scope.row.auth)"></div>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="200">
          <template v-slot="scope">
            <div v-html="setHeighLight(scope.row.createTime)"></div>
          </template>
        </el-table-column>
        <el-table-column label="标题" width="300">
          <template v-slot="scope">
            <div v-html="setHeighLight(scope.row.title)"></div>
          </template>
        </el-table-column>
        <el-table-column label="简介">
          <template v-slot="scope">
            <div v-html="setHeighLight(scope.row.intro)"></div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template v-slot="scope">
            <el-button type="text" @click="detail(scope.row)"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import API from "./api";
import Result from "../../utils/result";
import { Search } from "@element-plus/icons-vue";
import { onMounted, reactive, ref } from "vue";
import moment from "moment";

interface TableRow {
  auth: string;
  title: string;
  intro: string;
  createTime: string;
  [key: string]: string; // 表示除了上述已知属性外还可能存在其他属性
}

const keyword = ref<string>("");
const tableLoading = ref<boolean>(false);
let blogList = reactive<Result<TableRow>>({
  code: 0,
  message: "",
  data: [],
});
let result: Result<TableRow> = {
  code: 0,
  message: "",
  data: [],
};

onMounted(() => {
  getAllBlogs();
});

const search = (): void => {
  const auth: Array<TableRow> = result.data.filter(
    (item: TableRow) => item.auth.indexOf(keyword.value) !== -1
  );
  const createTime: Array<TableRow> = result.data.filter(
    (item: TableRow) => item.createTime.indexOf(keyword.value) !== -1
  );
  const title: Array<TableRow> = result.data.filter(
    (item: TableRow) => item.title.indexOf(keyword.value) !== -1
  );
  const intro: Array<TableRow> = result.data.filter(
    (item: TableRow) => item.intro.indexOf(keyword.value) !== -1
  );
  const allResult = new Set([...auth, ...createTime, ...title, ...intro]);
  blogList.data = [];
  blogList.data = [...allResult];
};
const getAllBlogs = async (): Promise<void> => {
  tableLoading.value = true;
  try {
    result = await API.getarticlelist();
    blogList.data = [...result.data];
    blogList.data.forEach((item: TableRow) => {
      item.createTime = moment(item.createTime).format("YYYY-MM-DD HH:mm:ss");
    });
  } catch (error) {
    console.log(error);
  } finally {
    tableLoading.value = false;
  }
};
const detail = (row: { id: 0 }): void => {
  window.open(`#/detail/${row.id}`, "_blank");
};
const setHeighLight = (field: string): string => {
  let tableItem: string = field;
  if (tableItem == null) {
    return tableItem;
  }
  tableItem = tableItem
    .toString()
    .replace(
      new RegExp(keyword.value, "gm"),
      "<span style='color:red;font-weight:700'>" + keyword.value + "</span>"
    );
  return tableItem;
};
</script>

<style lang="less">
.blog {
  padding: 24px;
  .header {
    margin-bottom: 8px;
  }
}
</style>
