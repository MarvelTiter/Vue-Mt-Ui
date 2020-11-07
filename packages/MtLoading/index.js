import Vue from 'vue'
import Loading from './src/MtLoading.vue'
const Mask = Vue.extend(Loading)
const loadingDirective = {};
if (!("classList" in document.documentElement)) {
    Object.defineProperty(HTMLElement.prototype, 'classList', {
        get: function() {
            var self = this;
            function update(fn) {
                return function(value) {
                    var classes = self.className.split(/\s+/g),
                        index = classes.indexOf(value);
 
                    fn(classes, index, value);
                    self.className = classes.join(" ");
                }
            }
 
            return {
                add: update(function(classes, index, value) {
                    if (!~index) classes.push(value);
                }),
 
                remove: update(function(classes, index) {
                    if (~index) classes.splice(index, 1);
                }),
 
                toggle: update(function(classes, index, value) {
                    if (~index)
                        classes.splice(index, 1);
                    else
                        classes.push(value);
                }),
 
                contains: function(value) {
                    return !!~self.className.split(/\s+/g).indexOf(value);
                },
 
                item: function(i) {
                    return self.className.split(/\s+/g)[i] || null;
                }
            };
        }
    });
}
loadingDirective.install = Vue => {
    function toggleLoading(el, binding) {
        Vue.nextTick(function () {
            if (binding.value) {
                if (!el.domInserted) {
                    el.originalPosition = el.style['position'];
                    insertDom(el, el);
                } else {
                    el.instance.visible = true;
                }
            } else {
                el.instance.visible = false;
            }
        })
    };

    function insertDom(parent, el) {
        if (!el.domVisible && el.style['display'] !== 'none' && el.style['visibility'] !== 'hidden') {

            if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
                parent.classList.add('mt-loading-parent--relative');
            }
            el.domVisible = true;

            parent.appendChild(el.mask);
            Vue.nextTick(function () {
                el.instance.visible = true;
            });
            el.domInserted = true;
        } else if (el.domVisible) {
            el.instance.visible = true;
        }
    };

    Vue.directive('mt-loading', {
        bind: function (el, binding, vnode) {
            var textExr;
            if (el.dataset && el.dataset['loadingText'])
                textExr = el.dataset['loadingText'];
            var vm = vnode.context;
            var mask = new Mask({
                el: document.createElement('div'),
                data: {
                    text: vm && vm[textExr] || textExr
                }
            })
            el.instance = mask;
            el.mask = mask.$el;
            binding.value && toggleLoading(el, binding);

        },
        update: function (el, binding) {
            if (el.dataset && el.dataset['loadingText'])
                el.instance.setText(el.dataset['loadingText']);
            if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding);
            }
        },
    });
};

export default loadingDirective;