// Плохой пример замыкание в js =)

function Counter() {
    let counter = 0;
    return () => {
        return counter += 1
    }
}

const counter1 = Counter();
counter1();
counter1();

console.log('counter1: ', counter1())


const counter2 = Counter();
counter2();
counter2();
counter2();
counter2();

console.log('counter2: ', counter2())




// Правильное использование замыкания
// Замыкание это в первую очередь, возможность языка, создавать приватный контекст для сущностей js
// (функций, объектов, классов)


// Создали функцию, которая создает объект, который в своем контексте имеет переменную _name,
// и больше к этой переменной, никто не имеет доступа. Переменная существует только для возвращаемого,
// объекта.

function User(defaultName) {
    let _name = defaultName

    return {
        getName() {
            return _name
        },

        setName(n) {
            _name = n
        }
    }
}

const user = User('Alex Kost')

console.log(user)
console.log(user.getName())






















