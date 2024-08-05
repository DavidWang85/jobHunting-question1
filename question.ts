interface User {
    firstName: string,
    lastName: string,
    customerID: number,
    note: string,
    profession: 'student' | 'freelancer' | 'productOwner' | 'engineer' | 'systemAnalytics'
}
//byUserName
function sortUserName(users: User[]): User[] {
    return users
        .filter((user) => user.firstName)
        .sort((a, b) => {
            const nameA = `${a.firstName}${a.lastName}${a.customerID}`;
            const nameB = `${b.firstName}${b.lastName}${b.customerID}`;
            return nameA.localeCompare(nameB);
        })
}
const professionOrder: { [key: string]: number } = {
    'systemAnalytics': 1,
    'engineer': 2,
    'productOwner': 3,
    'freelancer': 4,
    'student': 5
};

//byType
function sortByType(users: User[]): User[] {
    return users
        .filter((user) => user.firstName)
        .sort((a, b) => {
            if (professionOrder[a.profession] > professionOrder[b.profession]) {
                return 1
            } else if (professionOrder[a.profession] < professionOrder[b.profession]) {
                return -1
            } else {
                const nameA = `${a.firstName}${a.lastName}${a.customerID}`;
                const nameB = `${b.firstName}${b.lastName}${b.customerID}`;
                return nameA.localeCompare(nameB);
            }
        })
}
// 測試數據
const users: User[] = [
    { firstName: 'Aob', lastName: 'Bohnson', customerID: 1234, profession: 'engineer', note: '' },
    { firstName: 'Bob', lastName: 'Bmith', customerID: 1234, profession: 'student', note: '' },
    { firstName: 'Cob', lastName: 'Brown', customerID: 123, profession: 'freelancer', note: '' },
    { firstName: 'A', lastName: 'aa', customerID: 0, profession: 'systemAnalytics', note: '' },
    { firstName: '', lastName: 'bb', customerID: 33, profession: 'productOwner', note: '' },
    { firstName: 'Cav', lastName: 'bb', customerID: 33, profession: 'productOwner', note: '' },
    { firstName: 'Cad', lastName: 'bb', customerID: 33, profession: 'productOwner', note: '' },
];

// 執行排序並打印結果
const sortedUsers = sortUserName(users);
console.log("1.Q1", sortedUsers);

const sortedType = sortByType(users);
console.log("1.Q2", sortedType);

console.log("2.Q1", "因為.container .shop-list li.item 權重為31 大於 .container .shop-list .item 的30，所以顏色是綠色而不是藍色")
console.log("2.Q2", "使用:nth-child(odd)就可以改變奇數樣式、:nth-child(even)就可以改變偶數樣式")



let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
function getUniqueNumber(items: number[]): void {
    let uniqueAry = items.filter(item => items.indexOf(item) === items.lastIndexOf(item));
    uniqueAry.forEach(item => {
        console.log("3.", item)
    })
}
getUniqueNumber(items)

let answer4: string = "介紹：介面Interface是拿來定義物件的形狀，他決定了物件具有的屬性及其類型; 列舉Enum通常拿來定義常數，通常都是會使用在都是固定的事物上。 使用時機：介面的使用時機就是定義物件格式，列舉的使用時機是會有固定值的場景，例如星期一到星期日、使用者狀態或者API的格式"
console.log("4.", answer4)


let answer5: string = "1.handleAddCount方法中因為this.setState 是非同步的，每次調用都會基於當前的 state 進行更新，所以點擊時渲染只會+1，如果需要再點擊按鈕時+3，要在this.setState中使用立即函式，並且帶入參數(這個參數代表前一個state)，可以確保每次更新都基於最新的狀態"
console.log("5.", answer5)
//答案程式碼
// class Count extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//         this.handleAddCount = this.handleAddCount.bind(this);
//     }

//     handleAddCount() {
//         this.setState((prevState) => ({ count: prevState.count + 1 }));
//         this.setState((prevState) => ({ count: prevState.count + 1 }));
//         this.setState((prevState) => ({ count: prevState.count + 1 }));
//     }

//     render() {
//         return (
//             <div>
//             <h2>{ this.state.count } </h2>
//             < button onClick = { this.handleAddCount } > Add </>
//                 </div>
//     );
//     }
// }



console.log("6.", "答案如註解顯示")
//答案程式碼
// class SearchBox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { inputText: '' };
//         this.handleOnChange = this.handleOnChange.bind(this);
//         this.fetchResults = this.debounce((text) => {
//             console.log("執行axios", text);
//         }, 500);

//     }

//     debounce(fn, delay = 500) {
//         let timer;
//         return (...args) => {
//             clearTimeout(timer);
//             timer = setTimeout(() => {
//                 fn(...args);
//             }, delay);
//         };
//     }

//     // 處理輸入變化的方法
//     handleOnChange(event) {
//         const value = event.target.value;
//         this.setState({ inputText: value });
//         this.fetchResults(value);
//     }


//     render() {
//         return (
//             <input type= "search" name = "p" onChange = { this.handleOnChange } value = { this.state.inputText } />
//     );
//     }
// }

// ReactDOM.render(
//     <SearchBox />,
//   document.getElementById('root')
// );
