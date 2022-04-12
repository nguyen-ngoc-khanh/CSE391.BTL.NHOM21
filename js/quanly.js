/*jshint esversion: 6 */

//nạp dữ liệu lần đầu (trang được mở ra lần đầu) 
function onLoad() {
    let localInf = JSON.parse(localStorage.getItem('user'))
    console.log(localInf)
    localInf.forEach((item, index) => {
        var user = document.querySelector('.user');
        let cons = document.createElement("tr")
        cons.innerHTML = `
            <td>${index}</td>
            <td>${item.com}</td>
            <td>${item.na}</td>
            <td>${item.mail}</td>
            <td>${item.web}</td>
            `
        user.appendChild(cons)

    });
}

// thay đổi thông tin theo tên -> tên giữ nguyên các thông tin khác có thể thay đổi
let btn = document.querySelector('.btn')
if (btn) {
    btn.addEventListener('click', function() {
        let cmt = document.querySelector('.cmt').value
        let nam = document.querySelector('.nam').value
        let mail = document.querySelector('.email').value
        let web = document.querySelector('.website').value
        let count = 0;
        let info = {
            com: cmt,
            na: nam,
            mail: mail,
            web: web
        }
        if (cmt == '' || nam == '' || mail == '' || web == '') {
            alert('ban chưa điền đủ thông tin')

        } else if (cmt != '' && nam != '' && mail != '' && web != '') {
            let localInf = JSON.parse(localStorage.getItem('user'))
                /*if (localInf === null) {
                    let listInfo = []
                    listInfo.push(info)
                    localStorage.setItem('user', JSON.stringify(listInfo));
                } else {*/
            for (let i = 0; i < localInf.length; i++) {
                if (localInf[i].na == nam) {
                    count++
                    localInf[i].com = cmt;
                    localInf[i].mail = mail;
                    localInf[i].web = web;

                } else {
                    count = 0

                }
            }

            /* if (count === 0) {
                 localInf.push(info)
                 console.log('y')
             }*/
            localStorage.setItem('user', JSON.stringify(localInf))
            location.reload()
        }

    });
}




function indexRemove(nameUser) {
    let localInf = JSON.parse(localStorage.getItem('user'))
    for (let i = 0; i < localInf.length; i++) {
        if (localInf[i].na === nameUser) {
            return i
        }
    }

}
//xóa phần tử theo tên user
let removeBtn = document.querySelector('.btn-remove')
if (removeBtn) {
    removeBtn.addEventListener('click', function() {
        let nameUser = document.querySelector('.nameUser').value
        let localInf = JSON.parse(localStorage.getItem('user'))


        if (indexRemove(nameUser) == 0) {
            localInf.shift()
        } else if (indexRemove(nameUser) == localInf.length) {
            localInf.pop()
        } else {
            localInf.splice(indexRemove(nameUser), 1)
        }

        localStorage.setItem('user', JSON.stringify(localInf))
        location.reload()
    })
}