import { useState } from "react";

export function useFormState(initial, props) {
  const [user, setUser] = useState(initial);

  function handlechange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handlesubmit(e) {
    e.preventDefault();
    if (!user.name) return alert(`Missing Name`);
    else if (
      !user.email ||
      !user.email.includes(`@`) ||
      !user.email.includes(`.`)
    )
      return alert(`Missing valid email`);
    else if (!user.role) return alert(`Missing Role`);
    //   props.addNewteam(user);
    setUser({ id: null, name: ``, email: ``, role: `` });
  }
  return [user, setUser, handlechange, handlesubmit];
}
