
const OpenModalConfirm = document.getElementById("openModal").addEventListener('click', () => {
    $('#condition').modal('show');
    let example = 'The data cannot be recovered.';
    ModalMessage({
    title: 'Title',
    body: `<h3 class="text-center">Do you want to delete this item?</h3> <p class="text-center">${example}</p>`,
    options: {
        displayAcept: true,
        textAcept: 'Yes, delete',
        textCancel: 'Close'
        }
    });
    let actions = document.getElementById("accept").addEventListener('click', () => {
    //Actions
    deleteItem()
    })

})

const deleteItem = () => {
ModalMessage({
    title: 'Title',
    body: `<h3 class="text-center">Removed</h3>`,
    options: {
        displayAcept: false,
        textAcept: 'Yes, delete',
        textCancel: 'Close'
        }
    });
}

let ModalMessage = (_vm) => {
//Defines the width of the modal
if(_vm.options.modalWidth == false) {
    document.getElementById("width").classList.remove("modal-lg");
}
document.getElementById("modal-title").innerHTML= _vm.title;
document.getElementById("modal-body").innerHTML= _vm.body;

if(_vm.options.displayAcept === true) {
    document.getElementById("button-to-acept").innerHTML = `<button type="button" class="btn btn-danger" id="accept"></button>`;
    document.getElementById("accept").innerHTML = _vm.options.textAcept;
    document.getElementById("accept").classList.remove("d-none");
} else {
    //If the ID does not exist
    !!document.getElementById("accept") ? (document.getElementById("accept").className="d-none") : ''
}
document.getElementById("cancel").innerHTML = _vm.options.textCancel;

}