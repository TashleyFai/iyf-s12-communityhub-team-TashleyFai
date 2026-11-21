import useForm from '../hooks/useForm';

function ContactFormDemo() {
    const validate = (values) => {
        const errors = {};
        if (!values.email || !values.email.includes('@')) {
            errors.email = 'Invalid email';
        }
        return errors;
    };
   
    const { values, errors, touched, handleChange, handleBlur, reset } =
        useForm({ name: '', email: '' }, validate);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        reset();
    };
   
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
           
            <input
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.email && errors.email && (
                <span className="error">{errors.email}</span>
            )}
           
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactFormDemo;