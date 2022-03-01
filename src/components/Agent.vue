
<template>
  <tr :class="[agent.new ?  'has-background-warning' : '']">
    <th>
       <select name="" id="">
           <option value="">1</option>
           <option value="">2</option>
       </select>
    </th>
    <td>
        <input type="text" :placeholder="agent.name">
    </td>
    <td>

           <select name="" id="status">
           <option value="true">Spreman</option>
           <option value="">Nespreman</option>
           <option value="">Odlazni</option>
       </select>
    </td>
    <td>

    <input type="text" name="comment" >
    </td>
    <td >
        <span class="icon ">
            <i class="fas fa-delete-left fa-lg has-text-danger"></i>
        </span>
    </td>
  </tr>
</template>

<script>



export default {
  name: 'Agent',
  props: {
    agent: Object,
  },



};
</script>
