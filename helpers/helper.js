
export function definePropsFromElement(obj) {
    if (isset(obj.attributes)) {
        var swi_ = {};
        var oa = obj.attributes;
        for (const attr_index in oa) {
            if (isset(oa[attr_index].value)) {
                swi_[oa[attr_index].name] = oa[attr_index].value;
            }
        }
        return swi_;
    } else {
        return obj;
    }
}

export function childNodes(element) {
    let childNodes = element.childNodes;
    let childNodesWithoutText = []
    for (let index = 0; index < childNodes.length; index++) {
        if (childNodes[index].nodeType != 3 && childNodes[index].nodeType != 8) {
            childNodesWithoutText.push(childNodes[index]);
        } else {
            if (childNodes[index].nodeType == 3 && !isEmpty(childNodes[index].nodeValue)) {
                childNodesWithoutText.push(childNodes[index]);
            }
        }
    }
    return childNodesWithoutText;
}

export function toggleClasses(obj, selectors = []) {
    selectors.forEach(selector => {
        obj.classList.toggle(selector);
    });
}
export function displayTarget(obj, e, target) {
    let hTarget = document.querySelectorAll("." + target);
    hTarget.forEach(target => {
        if (isset(target)) {
            target.classList.toggle("hidden");
        }
    });

}

export function emit(obj, eventName, params = {}) {
    const event = new CustomEvent(eventName, params)
}

export function isset(el) {
    return (el != undefined && el != null) ? true : false;
}

export function isEmpty(string) {
    return (string == "" || string == "\n" || string == "\n        ") ? true : false;
}
export function getParent(obj, level, result = []) {
    if (level > 0) {
        getParent(obj.parentNode, level - 1, result);
    } else {
        result.push(obj)
    }
    return result[0];
}
export function urlParams() {
    return new URLSearchParams(window.location.search);
}

