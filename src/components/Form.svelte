<script>
  import Button from './ui/Button.svelte';
  import { Form, Field, ErrorMessage } from 'svelte-forms-lib';
  import * as yup from 'yup';
  let phone = '51944403320';

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
      // alert(JSON.stringify(values));
      let name = `Hola!%0D%0ASoy%20${values.name.split(' ').join('%20')}`;
      let mail = `mi%20correo%20es%20${values.email}`;
      let message = `y%20este%20es%20mi%20mensaje:%0D%0A${values.message.split(' ').join('%20')}`;
      window.open(`https://wa.me/${phone}?text=${name},%20${mail}%20${message}`, '_blank');
      
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
