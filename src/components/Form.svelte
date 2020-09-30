<script>
  import Button from './ui/Button.svelte';
  import { Form, Field, ErrorMessage } from 'svelte-forms-lib';
  import * as yup from 'yup';

  const formProps = {
    initialValues: { name: "", email: "", message: "" },
    validationSchema: yup.object().shape({
      name: yup.string().required(),
      email: yup
        .string()
        .email()
        .required(),
      message: yup.string().required()
    }),
    onSubmit: values => {
      alert(JSON.stringify(values));
    }
  };
</script>

<Form class="flex flex-col" {...formProps}>
  <Field class="contact-input" name="name" placeholder="Nombre" />
  <ErrorMessage name="name" />

  <Field class="contact-input" name="email" type="email" placeholder="E-mail" />
  <ErrorMessage name="email" />

  <Field class="pb-12 contact-input-text" name="message" type="text" placeholder="Mensaje" />
  <ErrorMessage name="message" />
  <Button text="Contactar" type="submit" />
  <!-- TODO: Funcionalidad Form -->
</Form>
