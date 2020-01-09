import { useState, useRef } from "react";
import { axiosWithAuth } from "../../util/axiosWithAuth";

export function useFormState(initial, props) {
  const [user, setUser] = useState(initial);
  const [value, setValue] = useState(0);

  // console.log(props, `props`);
  // console.log(props.match.params.id, `params`);
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

    axiosWithAuth()
      .post(
        ` https://lambda-food-truck.herokuapp.com/api/trucks/${props.match.params.id}/review`,
        {
          title: user.title,
          rating: user.stars,
          review: user.review
        }
      )

      .then(res => {
        console.log("success", res);
      })
      .catch(err => console.log(err.response));

    if (!loading) {
      setSuccess(false);
      setLoading(true);

      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setUser({ id: null, title: ``, stars: ``, review: `` });
        setValue(0);
      }, 1000);
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
