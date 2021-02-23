<template>
    <div>
        <h2>首页 - by ctcode</h2>
		<div style="margin: 20px 10%;">
        	<a-table rowKey="id" :dataSource="dataSource" :columns="columns" />
		</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataSource: [],
            columns: [
                {
                    title: "姓名",
                    dataIndex: "author",
                    key: "author",
                },
                {
                    title: "标题",
                    dataIndex: "title",
                    key: "title",
                },
                {
                    title: "日期",
                    dataIndex: "create_time",
                    key: "create_time",
                },
            ],
        };
    },
    created() {
        this.$request({
            url: "/api/posts",
            method: "POST",
        })
            .then((res) => {
				const { data, status } = res;
                if (status === 200) {
                    this.dataSource = data.data;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<style>
</style>