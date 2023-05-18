export default function validateSubmit(tree, setErrors, addMessage) {
    const errors = new Set;

    if (!tree.hasOwnProperty('title') ||
        typeof tree.title !== 'string' ||
        tree.title.length < 3 ||
        tree.title.length > 100
    ) {
        errors.add('title')
    }
    if (errors.size > 0) {
        setErrors(errors);
        addMessage({
            type: 'error',
            title: 'Types Create',
            text: 'Types create has errors'
        });
        return false;
    }
    return true;
}