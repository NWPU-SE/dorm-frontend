const App = {
  data() {
    return {
      dormNum: 1,
      dormData: [
        {
          name: "这里空空如也哦~",
          msg: "等一个有缘人~"
        }
      ],
      nowDormPage: 1,

      nameOptions: ["云天苑", "星天苑", "海天苑"],
      selectedDormName: "星天苑",

      indexOptions: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
      selectedDormIndex: "G",

      idOptions: [
        {
          display: "全部",
          value: "0"
        }
      ],
      selectedDormId: {
        display: "全部",
        value: "0"
      }
    };
  },
  created() {
    for (let i = 1; i <= 6; ++ i) {
      for (let j = 0; j <= 60; ++ j) {
        let A = String(i);
        let B = String(j);
        if (j < 10) B = "0" + B;
        this.idOptions.push({
          display: A + B,
          value: A + B
        });
      }
    }

    const _this = this;
    $.ajax({
      url: "http://42.193.171.82:3000/api/dorm",
      type: "get",
      data: {
        "dorm_name": "星天苑",
        "dorm_index": "G"
      },
      success: function(res) {
        _this.dormNum = res.length;
        _this.dormData = [];
        for (let i = 0; i < res.length; ++ i) {
          _this.dormData[i] = {
            name: res[i].dorm_name + res[i].dorm_index + res[i].dorm_id,
            msg: res[i].message
          };
        }
      }
    });
  }
};

const app = Vue.createApp(App);
app.use(ElementPlus);
app.mount("#app");