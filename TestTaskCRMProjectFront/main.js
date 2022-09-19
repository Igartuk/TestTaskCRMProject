const popupBg = document.querySelector(".popup__bg");
const popup = document.querySelector(".popup");
const openPopupButtons = document.querySelectorAll(".open-popup");
const closePopupButton = document.querySelector(".close-popup");
const popupEdit = document.querySelector(".popup__edit");
const popupBgEdit = document.querySelector(".popup__bg__edit");
const closePopupEditButton = document.querySelector(".close-popup-edit");
const createButton = document.querySelector(".btn-create");
const deleteButton = document.querySelector(".btn-delete");
const editButton = document.querySelector(".btn-edit");
const contactsList = document.querySelector(".contacts__list");
const opneEditButton = document.querySelectorAll(".open-popup-edit");
const contactName = document.querySelector(".name");
const contactMobilePhone = document.querySelector(".mobilePhone");
const contactJobTitle = document.querySelector(".jobTitle");
const contactBirthDate = document.querySelector(".birthDate");
const contactNameEdit = document.querySelector(".name-edit");
const contactMobilePhoneEdit = document.querySelector(".mobilePhone-edit");
const contactJobTitleEdit = document.querySelector(".jobTitle-edit");
const contactBirthDateEdit = document.querySelector(".birthDate-edit");

const state = {
  contacts: [],
  newContact: {
    id: "",
    name: "",
    mobilePhone: "",
    jobTitle: "",
    birthDate: "",
  },
  editContact: {},
};
getContactsRequest();

function fillContactsList(contacts) {
  contactsList.innerHTML = "";
  if (contacts.length != 0) {
    contacts.forEach(
      (contact, index) =>
        (contactsList.innerHTML += createContact(contact, index))
    );
  }
}
const cleanData = () => {
  state.newContact.name = "";
  state.newContact.mobilePhone = "";
  state.newContact.jobTitle = "";
  state.newContact.birthDate = "";

  contactName.value = "";
  contactMobilePhone.value = "";
  contactJobTitle.value = "";
  contactBirthDate.value = "";
};

const createContact = (contact, index) => `
    <div class="contact">
       <div class=""contact__wrapper>
          <h1 class="wrapper__name">${contact.name}</h1>
          <div class="wrapper__mobilphone">${contact.mobilePhone}</div>
          <div class="wrapper__jobTitle">${contact.jobTitle}</div>
          <div class="wrapper__birthDate">${contact.birthDate}</div>
          <button type="submit" class='open-popup-edit' onClick ="editContact(${index})">Change info</button>
          <button class='btn-delete' onClick="deleteContact(${index})">Delete contact</button>
       </div> 
    </div>
 `;

contactName.addEventListener("change", (e) => {
  return (state.newContact.name = e.target.value);
});
contactMobilePhone.addEventListener("change", (e) => {
  return (state.newContact.mobilePhone = e.target.value);
});
contactJobTitle.addEventListener("change", (e) => {
  return (state.newContact.jobTitle = e.target.value);
});
contactBirthDate.addEventListener("change", (e) => {
  return (state.newContact.birthDate = e.target.value);
});
contactNameEdit.addEventListener("change", (e) => {
  return (state.editContact.name = e.target.value);
});
contactMobilePhoneEdit.addEventListener("change", (e) => {
  return (state.editContact.mobilePhone = e.target.value);
});
contactJobTitleEdit.addEventListener("change", (e) => {
  return (state.editContact.jobTitle = e.target.value);
});
contactBirthDateEdit.addEventListener("change", (e) => {
  return (state.editContact.birthDate = e.target.value);
});
openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});

closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});
closePopupEditButton.addEventListener("click", () => {
  popupBgEdit.classList.remove("active");
  popupEdit.classList.remove("active");
});
document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  } else if (e.target === popupBgEdit) {
    popupBgEdit.classList.remove("active");
    popupEdit.classList.remove("active");
  }
});
const editContact = (index) => {
  popupBgEdit.classList.add("active");
  popupEdit.classList.add("active");
  const editebleContact = state.contacts[index];
  state.editContact = editebleContact;

  contactNameEdit.value = state.editContact.name;
  contactMobilePhoneEdit.value = state.editContact.mobilePhone;
  contactJobTitleEdit.value = state.editContact.jobTitle;
  contactBirthDateEdit.value = state.editContact.birthDate;
};
const deleteContact = (index) => {
  const editebleContact = state.contacts[index];
  deleteContactRequest(editebleContact.id);
  state.contacts.splice(index, 1);
  fillContactsList(state.contacts);
};

opneEditButton.forEach((button) => {
  button.addEventListener("click", () => {
    popupBgEdit.classList.add("active");
    popupEdit.classList.add("active");
  });
});
async function getContactsRequest() {
  const resp = await fetch("https://localhost:7262/api/Contact", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const respData = await resp.json();
  state.contacts = state.contacts.concat(respData);
  fillContactsList(respData);
}
async function createContactRequest() {
  const resp = await fetch("https://localhost:7262/api/Contact", {
    method: "POST",
    body: JSON.stringify(state.newContact),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  const respData = await resp.json();
  state.contacts = state.contacts.concat(respData.result);
  fillContactsList(respData.result);
}
async function deleteContactRequest(id) {
  return await fetch(`https://localhost:7262/api/Contact/${id}`, {
    method: "DELETE",
  });
}
async function editContactRequest() {
  const resp = await fetch("https://localhost:7262/api/Contact", {
    method: "PUT",
    body: JSON.stringify(state.editContact),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  const respData = await resp.json();
  state.contacts = state.contacts.concat(respData);
  fillContactsList(respData);
}

const checkContactName = () => {
  let valid = false;

  const min = 3,
    max = 25;

  const username = contactName.value.trim();

  if (!isRequired(username)) {
    showError(contactName, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      contactName,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(contactName);
    valid = true;
  }
  return valid;
};
const checkBirthDate = () => {
  let valid = false;
  const date = contactBirthDate.value.trim();
  if (!isRequired(date)) {
    showError(contactBirthDate, "Birthdate cannot be blank");
  } else if (!isBirthDateValid(date)) {
    showError(contactBirthDate, "Invaled date");
  } else {
    showSuccess(contactBirthDate);
    valid = true;
  }
  return valid;
};

const checkMobilePhone = () => {
  let valid = false;
  const phone = contactMobilePhone.value.trim();
  if (!isRequired(phone)) {
    showError(contactMobilePhone, "Email cannot be blank.");
  } else if (!isMobilePhoneValid(phone)) {
    showError(contactMobilePhone, "Phone is not valid.");
  } else {
    showSuccess(contactMobilePhone);
    valid = true;
  }
  return valid;
};

const checkJobTitle = () => {
  let valid = false;
  const title = contactJobTitle.value.trim();
  const min = 3,
    max = 25;

  if (!isRequired(title)) {
    showError(contactJobTitle, "Username cannot be blank.");
  } else if (!isBetween(title.length, min, max)) {
    showError(
      contactJobTitle,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(contactJobTitle);
    valid = true;
  }
  return valid;
};

const isMobilePhoneValid = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(phone);
};
const isBirthDateValid = (date) => {
  let aTmp = date.split("-");
  if (aTmp.length != 3) {
    return false;
  }
  if (parseInt(aTmp[0], 10) <= 1990 || parseInt(aTmp[0], 10) >= 2022) {
    return false;
  }

  return true;
};

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("p");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");

  const error = formField.querySelector("p");
  error.textContent = "";
};

popup.addEventListener("submit", async (e) => {
  e.preventDefault();

  let isUsernameValid = checkContactName(),
    isMobilePhoneValid = checkMobilePhone(),
    isJobTitleValid = checkJobTitle(),
    isBirthDateValid = checkBirthDate();

  let isFormValid =
    isUsernameValid &&
    isMobilePhoneValid &&
    isJobTitleValid &&
    isBirthDateValid;

  if (isFormValid) {
    await createContactRequest();
    cleanData();
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
});
const checkContactNameEdit = () => {
  let valid = false;

  const min = 3,
    max = 25;

  const username = contactNameEdit.value.trim();

  if (!isRequired(username)) {
    showError(contactNameEdit, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      contactNameEdit,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(contactNameEdit);
    valid = true;
  }
  return valid;
};
const checkBirthDateEdit = () => {
  let valid = false;
  const date = contactBirthDateEdit.value.trim();
  if (!isRequired(date)) {
    showError(contactBirthDateEdit, "Birthdate cannot be blank");
  } else if (!isBirthDateValid(date)) {
    showError(contactBirthDateEdit, "Invaled date");
  } else {
    showSuccess(contactBirthDateEdit);
    valid = true;
  }
  return valid;
};

const checkMobilePhoneEdit = () => {
  let valid = false;
  const phone = contactMobilePhoneEdit.value.trim();
  if (!isRequired(phone)) {
    showError(contactMobilePhoneEdit, "Phone cannot be blank.");
  } else if (!isMobilePhoneValid(phone)) {
    showError(contactMobilePhoneEdit, "Phone is not valid.");
  } else {
    showSuccess(contactMobilePhoneEdit);
    valid = true;
  }
  return valid;
};

const checkJobTitleEdit = () => {
  let valid = false;
  const title = contactJobTitleEdit.value.trim();
  const min = 3,
    max = 25;

  if (!isRequired(title)) {
    showError(contactJobTitleEdit, "Username cannot be blank.");
  } else if (!isBetween(title.length, min, max)) {
    showError(
      contactJobTitleEdit,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(contactJobTitleEdit);
    valid = true;
  }
  return valid;
};

popupEdit.addEventListener("submit", async (e) => {
  e.preventDefault();

  let isUsernameValid = checkContactNameEdit(),
    isMobilePhoneValid = checkMobilePhoneEdit(),
    isJobTitleValid = checkJobTitleEdit(),
    isBirthDateValid = checkBirthDateEdit();

  let isFormValid =
    isUsernameValid &&
    isMobilePhoneValid &&
    isJobTitleValid &&
    isBirthDateValid;

  if (isFormValid) {
    await editContactRequest();
    cleanData();
    popupBgEdit.classList.remove("active");
    popupEdit.classList.remove("active");
  }
});
