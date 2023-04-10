
// function generateString(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     const charactersLength = characters.length;
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }


// function redirect() {
//     let caIdVal = document.getElementById("caId").value;
//     let caSecretVal = document.getElementById("caSecret").value;

//     console.log(caIdVal, caSecretVal)

//     if (caIdVal && caSecretVal) {
//         let url = `https://api.contaazul.com/auth/authorize?client_id=${caIdVal}&scope=sales&redirect_uri=https://conta-azul-requester.netlify.app/&state=${generateString(10)}`;

//         // window.location.href = url;
//         window.open(url, '_blank');
//     }
// }

$(document).ready(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let code = params.code; // "some_value"

    if (code) {
        console.log(code);
        $(".box").html(`
            <div>
                client_id:
                <input id="caId" type="text">
            </div>
            <div>
                client_secret:
                <input id="caSecret" type="text">
            </div>
            <p style="text-align: center;">
                Você já possui um código <br/ > <i>${code}</i>
                <br /> Insira seus dados novamente para continuar
            </p>
            <button onclick="process('${code}')">Já inseri os dados</button>
        `);
    } else {
        $(".box").html(`
            <div>
               Utilize esse endereço como URL da sua aplicação
            </div>
        `);
    }
});

// async function process(code) {
//     let caIdVal = document.getElementById("caId").value;
//     let caSecretVal = document.getElementById("caSecret").value;

//     $(".box").append(`
//         <p>
//         Sua url é: <br /> <i>https://api.contaazul.com/oauth2/token?grant_type=authorization_code&redirect_uri=https://conta-azul-requester.netlify.app/&code=${code}</i>
//         <br /><br />
//         Sua Authorization header é: <br /> <i>Basic ${btoa(caIdVal + ":" + caSecretVal)}</i>
//         </p>
//     `);

//     // let args = {
//     //     url: `https://api.contaazul.com/oauth2/token?grant_type=authorization_code&redirect_uri=https://conta-azul-requester.netlify.app/&code=${code}`,
//     //     method: "POST",
//     //     headers: {
//     //         "Authorization": `Basic ${btoa(caIdVal + ":" + caSecretVal)}`,
//     //     }
//     // }
//     // console.log(args)

//     // let req = await $.ajax(args);
//     // console.log(req)
//     // let res = await req.json();
//     // console.log(res)
// }