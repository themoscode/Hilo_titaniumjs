App.Domains.Contact = function (properties) {

    this.id = properties.id;
    this.firstName = properties.firstName;
    this.lastName = properties.lastName;
    this.image = properties.image || '/images/icons/logo.png';
    this.hasHilo = properties.hasHilo;

};

App.Domains.Contact.prototype = {

    getFullName: function () {

        return this.firstName + ' ' + this.lastName;

    }

};

App.Domains.Contact.parseApiResponse = function (contactList) {

    var contactInstanceList = [];

    _.each(contactList, function (contact) {

        var contactInstance = new App.Domains.Contact({
            id: contact.id,
            firstName: contact.fir,
            lastName: contact.las
        });

        contactInstanceList.push(contactInstance);

    });

    return contactInstanceList;

};