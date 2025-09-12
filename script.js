document.addEventListener('DOMContentLoaded', () => {
  console.log('High Touch Project ready.');
  enableScrollReveal();
  initContactForm();
});

function enableScrollReveal() {
  const revealTargets = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || revealTargets.length === 0) {
    revealTargets.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    }
  }, { root: null, threshold: 0.15 });

  revealTargets.forEach((el) => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const inputs = form.querySelectorAll('input, textarea');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Real-time validation
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearFieldError(input));
  });

  // Form submission
  form.addEventListener('submit', handleFormSubmit);

  function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Required field check
    if (!value) {
      isValid = false;
      errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required.`;
    } else {
      // Email validation
      if (fieldName === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address.';
        }
      }
      // Name validation (minimum 2 characters)
      if (fieldName === 'name' && value.length < 2) {
        isValid = false;
        errorMessage = 'Name must be at least 2 characters long.';
      }
      // Message validation (minimum 10 characters)
      if (fieldName === 'message' && value.length < 10) {
        isValid = false;
        errorMessage = 'Message must be at least 10 characters long.';
      }
    }

    showFieldError(field, isValid ? null : errorMessage);
    return isValid;
  }

  function showFieldError(field, message) {
    clearFieldError(field);
    
    if (message) {
      field.classList.add('error');
      const errorDiv = document.createElement('div');
      errorDiv.className = 'field-error';
      errorDiv.textContent = message;
      field.parentNode.appendChild(errorDiv);
    }
  }

  function clearFieldError(field) {
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }
  }

  function validateForm() {
    let isFormValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });
    return isFormValid;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      showFormError('Please fix the errors above before submitting.');
      return;
    }

    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
      showFormSuccess('Message sent successfully! We\'ll get back to you soon.');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send';
    }, 1500);
  }

  function showFormError(message) {
    showFormMessage(message, 'error');
  }

  function showFormSuccess(message) {
    showFormMessage(message, 'success');
  }

  function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message--${type}`;
    messageDiv.textContent = message;
    
    // Insert before submit button
    submitBtn.parentNode.insertBefore(messageDiv, submitBtn);
    
    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        if (messageDiv.parentNode) {
          messageDiv.remove();
        }
      }, 5000);
    }
  }
}


