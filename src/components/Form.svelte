<script>
  import Button from './ui/Button.svelte';
  import FieldArea from './ui/FieldArea.svelte';
  import { Form, Field, ErrorMessage } from 'svelte-forms-lib';
  import * as yup from 'yup';
  let phone = __tutti.env.T_PHONE;
  console.log(phone);

  const formProps = {
    initialValues: { name: '', email: '', message: '' },
    validationSchema: yup.object().shape({
      name: yup.string().required(),
      email: yup
        .string()
        .email()
        .required(),
      message: yup.string().required(),
    }),
    onSubmit: values => {
      const name = `Hola!%0D%0ASoy%20${values.name.split(' ').join('%20')}`;
      const mail = `mi%20correo%20es%20${values.email}`;
      const message = `y%20este%20es%20mi%20mensaje:%0D%0A${values.message.replace(
        /\n/g,
        '%0A',
      )}`;
      const link = `https://${
        window.innerWidth < 801 ? 'api' : 'web'
      }.whatsapp.com/send?phone=${phone}&text=${name},%20${mail}%20${message}`;

      if (window.innerWidth < 801) {
        window.location.href = link;
      } else {
        window.open(link, '_blank');
      }
    },
    // TODO: Clear form
  };
  console.log(formProps);
</script>

<Form class="flex flex-col" {...formProps}>
  <Field class="contact-input" name="name" placeholder="Nombre" />
  <ErrorMessage name="name" />
  <Field class="contact-input" name="email" type="email" placeholder="E-mail" />
  <ErrorMessage name="email" />
  <FieldArea
    class="pb-12 contact-input-text"
    name="message"
    type="text"
    placeholder="Mensaje" />
  <ErrorMessage name="message" />
  <Button text="Contactar" type="submit" />
</Form>
