import type { NextPage } from "next";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { createResource } from "../modules/resources/interface/controller";
import styles from "../styles/Home.module.css";

enum ValidationErrors {
  NAME_LENGTH = "El nombre debe tener una longitud mayor o igual a 5",
}

const Home: NextPage = () => {
  const [form, setForm] = useState({
    name: "",
  });

  const [showErrors, setShowErrors] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    (async () => {
      const errors = getErrors();
      if (errors.name) {
        setShowErrors(true);
        return;
      }
      createResource(form);
    })();
  };

  useEffect(() => {
    setErrors(getErrors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const getErrors = () => {
    const errors = {
      name: false,
    };

    if (form.name.length < 5) {
      errors.name = true;
    }

    return errors;
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" onChange={handleOnChange} />
        <input type="submit" />
        {showErrors && errors.name && <p>{ValidationErrors.NAME_LENGTH}</p>}
      </form>
    </div>
  );
};

export default Home;
