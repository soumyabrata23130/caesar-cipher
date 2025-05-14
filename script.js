document.getElementById("caesar-card").addEventListener("submit", (event)=>{
	event.preventDefault()
	
	const input=document.getElementById("input").value
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
	document.getElementById("output").innerHTML=`Output: ${output}`
})

// dark and light theme
document.getElementsByName("theme").forEach((radio) => {
	radio.addEventListener("change", () => {
		theme = radio.value
		console.log("Theme: " + theme)

		switch(theme) {
			case "dark": // if theme is dark, select dark theme
				document.querySelector("html").style.cssText = `
					color-scheme: dark;
					--background: linear-gradient(to bottom, black, #0B0B3B, #1C1C3A);
					--button: darkgreen;
					--foreground: #ededed;
				`
				break
			case "light": // if theme is light, select light theme
				document.querySelector("html").style.cssText = `
					color-scheme: light;
					--background: linear-gradient(to bottom, #87CEEB, #ADD8E6, white);
					--button: lightgreen;
					--foreground: black;"
				`
				break
			default: // otherwise, select system default
				document.querySelector("html").style.cssText = ""
		}
	})
})