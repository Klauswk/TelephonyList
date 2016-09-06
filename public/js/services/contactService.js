angular.module("listaTelefonica").service("contactService", function ($http, contactDAO, serialGenerate, config) {
    var _getContacts = function () {
        return $http.get(config.apiURL + "/contatosData.js");
    };

    var _saveContact = function (contato) {
        contato.serial = serialGenerate.generate();
        contato.data = new Date();
        contactDAO.saveContact(contato);
    };

    var _anyContactSelected = function (contacts) {
        return !contacts.some(function (contact) {
            return contact.selecionado;
        });
    };

    var _canAddContact = function (contact) {
        if (!contact) {
            return false;
        }
        return !((contact.nome) || (contact.telefone) || (contact.operadora) || (contact.telefone.length === 10));
    };

    var _deleteSelectedContacts = function (contacts) {
        return contacts.filter(function (contact) {
            if (!contact.selecionado) {
                return contact;
            }
        });
    };

    return {
        anyContactSelected: _anyContactSelected,
        saveContact: _saveContact,
        canAddContact: _canAddContact,
        deleteSelectedContacts: _deleteSelectedContacts
    };


});