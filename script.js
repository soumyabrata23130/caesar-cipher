document.getElementById("encrypt").addEventListener("click", ()=>{
	const input=String(document.getElementById("input").value)
	const shift=Number(document.getElementById("shift").value)
	let output=""
	for(let i=0; i<input.length; i++) {
		let char=input[i]
		if(char>='A' && char<='Z') {
			let n=((char.charCodeAt(0) - 65 + shift)%26 + 26)%26 + 65
			output+=String.fromCharCode(n)
		}
		else if(char>='a' && char<='z') {
			let n=((char.charCodeAt(0) - 97 + shift)%26 + 26)%26 + 97
			output+=String.fromCharCode(n)
		}
		else {
			output+=char
		}
	}
	document.getElementById("output").value=output
})