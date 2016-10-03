<template>
  <section>
    <div class="weui-panel weui-panel_access">
      <div class="weui-cells__title">Timestamp Formatter</div>
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <input class="weui-input" type="text" placeholder="eg: 1456989887000" v-model="timestamp">
          <p class="weui-media__desc">{{timestamp | timestampFormat 'YYYY-MM-DD HH:mm:ss'}}</p>
        </div>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-cells__title">Byte Formatter</div>
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <input class="weui-input" type="text" placeholder="eg: 1024" v-model="size">
          <p class="weui-media__desc">{{size | byteFormat}}</p>
        </div>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-cells__title">Percentage Formatter</div>
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <input class="weui-input" type="text" placeholder="eg: 0.456789" v-model="percentage">
          <p class="weui-media__desc">{{percentage | percentageFormat '2'}}</p>
        </div>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-cells__title">currency Formatter</div>
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <input class="weui-input" type="text" placeholder="eg: 1000000.26" v-model="commafy">
          <p class="weui-media__desc">{{commafy | currency '¥ ' "2"}}</p>
        </div>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-cells__title">filterBy "DiCaprio" in name</div>
      <div class="weui-cells">
        <div class="weui-cell" v-for="user in family | filterBy searchText in 'name'">
          <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>{{user.role}}</p>
          </div>
          <div class="weui-cell__ft">name：{{user.name}}</div>
        </div>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-cells__title">orderBy "age" reverse：{{reverse}}</div>
      <div class="weui-cells">
        <div class="weui-cell" v-for="user in family | orderBy field reverse">
          <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
          <div class="weui-cell__bd">
            <p>{{user.role}}</p>
          </div>
          <div class="weui-cell__ft">age：{{user.age}}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
module.exports = {
  data: function () {
    return {
      timestamp: new Date().getTime(),
      size: '1000000',
      percentage: '0.456789',
      commafy: '1000000.26',
      family: [
        {
          role: 'father',
          age: '42',
          name: 'Xiaoming DiCaprio'
        },
        {
          role: 'mather',
          age: '40',
          name: 'Xiaohong Smith'
        },
        {
          role: 'douther',
          age: '12',
          name: 'Xiaoyan DiCaprio'
        },
        {
          role: 'son',
          age: '22',
          name: 'Leonardo DiCaprio'
        }
      ],
      searchText: 'DiCaprio',
      field: 'age',
      reverse: -1
    }
  }
}
</script>
<style lang="scss" scoped>
  .weui-media-box {
    input {height: 1rem;margin-bottom: .32rem;border:1px solid #e5e5e5;padding: .32rem;}
  }
  .weui-cells {margin-top: 0;}
</style>
