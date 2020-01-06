
import { useState, useRef } from "react";


export function useFormState(initial, props) {
  const [user, setUser] = useState(initial);
  const [value, setValue] = useState(0);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();


  function handlechange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handlestarchange(event, newValue) {
    setValue(newValue);


    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleButtonClick = e => {
    e.preventDefault();
    if (!user.title) return alert(`Missing Title`);
    else if (!user.review) return alert(`Missing Review`);
    else if (!user.stars) return alert(`Rating Required`);
    //   props.addNewteam(user);

    if (!loading) {
      setSuccess(false);
      setLoading(true);

      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setUser({ id: null, title: ``, stars: ``, review: `` });
        setValue(0);
      }, 2000);
    }
  };


  function handlesubmit(e) {
    e.preventDefault();
    if (!user.title) return alert(`Missing Title`);
    else if (!user.review) return alert(`Missing Review`);
    else if (!user.stars) return alert(`Rating Required`);
    //   props.addNewteam(user);

    setUser({ id: null, title: ``, stars: ``, review: `` });
    setValue(0);
  }
  //might need to export setUser to edit post --

  return [
    user,
    handlechange,
    handlesubmit,
    handleButtonClick,
    handlestarchange,
    success,
    loading,
    value
  ];
}

