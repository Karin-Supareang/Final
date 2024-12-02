

function validateGuestForm() {
    const fname = document.getElementById("fname").value.trim();
    if (fname === "") {
        alert("กรุณากรอกชื่อและนามสกุล");
        return false;
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("กรุณากรอกอีเมลให้ถูกต้อง");
        return false;
    }

    const status = document.getElementById("status").value;
    if (status === "") {
        alert("กรุณาเลือกสถานะผู้ใช้งาน");
        return false;
    }

    const topic = document.getElementById("Topic").value.trim();
    if (topic === "") {
        alert("กรุณากรอกหัวข้อเรื่อง");
        return false;
    }

    const review = document.getElementById("w3review").value.trim();
    if (review === "") {
        alert("กรุณากรอกเนื้อหาที่เสนอแนะ");
        return false;
    }

    const rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        alert("กรุณาเลือกคะแนน");
        return false;
    }

    return true;
}


const guestForm = document.getElementById('guestForm');
const commentsSection = document.getElementById('commentsSection');

document.getElementById('guestForm').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateGuestForm()) {
        const name = document.getElementById('fname').value.trim();
        const email = document.getElementById('email').value.trim();
        const status = document.getElementById('status').value;
        const topic = document.getElementById('Topic').value.trim();
        const review = document.getElementById('w3review').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked').value;

        
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <h3>${name}</h3>
            <p><strong>สถานะ:</strong> ${status}</p>
            <p><strong>หัวข้อ:</strong> ${topic}</p>
            <p>${review}</p>
            <span class="rating">เรตติ้ง: ${'⭐'.repeat(rating)}</span>
        `;

        commentsSection.appendChild(commentDiv); 

        guestForm.reset();
    }
});
