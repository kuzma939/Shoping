export default function validateRegisterForm(formData) {
    const errors = {};
  
    // Валідація імені користувача (імена можуть співпадати)
    if (!formData.username.trim()) {
      errors.username = "Ім'я користувача є обов'язковим.";
    } else if (formData.username.length < 3) {
      errors.username = "Ім'я користувача має бути не менше 3 символів.";
    }
  
    // Валідація прізвища (прізвища можуть співпадати)
    if (!formData.lastname.trim()) {
      errors.lastname = "Прізвище є обов'язковим.";
    } else if (formData.lastname.length < 3) {
      errors.lastname = "Прізвище має бути не менше 3 символів.";
    }
  
    // Валідація email (унікальний формат)
    if (!formData.email.trim()) {
      errors.email = "Email є обов'язковим.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Некоректний формат email.";
    }
  
    // Валідація пароля (щонайменше 8 символів і хоча б одна літера)
    if (!formData.password) {
      errors.password = "Пароль є обов'язковим.";
    } else if (formData.password.length < 8) {
      errors.password = "Пароль має бути не менше 8 символів.";
    } else if (!/[a-zA-Z]/.test(formData.password)) {
      errors.password = "Пароль має містити хоча 8 одну літеру.";
    }
  
    return errors;
  }
  