export default function validateSubmit(tree, setErrors, addMessage) {
    const errors = new Set();

    if (!tree.hasOwnProperty('title') ||
        typeof tree.title !== 'string' ||
        tree.title.length < 3 ||
        tree.title.length > 30
    ) {
        errors.add('title')
    }
    if (!tree.hasOwnProperty('height') ||
        typeof tree.height !== 'number' ||
        isNaN(tree.height) ||
        tree.height <= 0 ||
        tree.height > 99.99
    ) {
        errors.add('height');
    }
    if (!tree.hasOwnProperty('type') ||
        typeof tree.type !== 'number' ||
        isNaN(tree.type) ||
        tree.type <= 0
    ) {
        errors.add('type');
    }
    if (errors.size > 0) {
        setErrors(errors);
        addMessage({
            type: 'error',
            title: 'Trees Create',
            text: 'Trees create has errors'
        });
        return false;
    }
    return true;
}

export const sanitizeInput = (value, prop, oldValue) => {

    if (prop === 'title') {
        value = value.replace(/[^A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ ]/g, '');
    }
    if (prop === 'height') {
        if (value.match(/^\d*[.\d]{0,1}\d*$/)) {
            return value;
        }
        return oldValue;
    }
    return value;
}