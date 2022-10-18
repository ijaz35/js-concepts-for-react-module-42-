function saveToStorage() {
    const idField = document.getElementById('storage-id');
    const id = idField.value;
    const valueField = document.getElementById('storage-value');
    const value = valueField.value;
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idField.value = '';
    valueField.value = '';

}