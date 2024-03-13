import { reactive } from "vue";

const todos = reactive([
  {
    id: 1,
    task: "Complete project report",
    done: false,
  },
  {
    id: 2,
    task: "Attend team meeting at 10 AM",
    done: true,
  },
  {
    id: 3,
    task: "Review code changes",
    done: false,
  },
  {
    id: 4,
    task: "Prepare presentation slides",
    done: true,
  },
  {
    id: 5,
    task: "Respond to client emails",
    done: false,
  },
]);
export default todos;
