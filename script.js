// Paragraph data for each person
const data = {
    person1: [
       
        "ปี 1\nเรียนรู้วิธีการแก้ไขปัญหาด้วยวิชา 101 ที่พวกเรารัก และได้เรียนเขียนเว็บสุดเท่ด้วยวิชา 100 😎 แล้วก็มี 102 และวิชาเทอมสองสุดท้าทาย",
        "ปี 2\nได้เรียนวิชาที่น่าสนใจมากขึ้น ทั้งได้เรียนรู้การออกแบบ และได้เรียนรู้โครงสร้างข้อมูล",
        "ปี 3\nเทอมสามคาบเรียนไม่เยอะ แต่ยากมาก",
        "ปี 4\nปีสุดท้ายแล้วหรอ..เร็วจัง แต่ก็ได้ได้เรียนวิชายากๆเหมือนเดิมนะ"
    ],
    person2: [
        "ปี 1\nโฟกัสกับพื้นฐานในการเรียนโดยเข้าใจเนื้อหาเรียนให้ได้มากที่สุด อย่างการพัฒนาเว็บไซต์ การแก้ปัญหาและการเขียนโปรแกรมและเก็บวิชาศึกษาทั่วไปพร้อมทั้งสอบ exempt วิชาศึกษาทั่วไปในปี 1 เพื่อประหยัดเวลาและเตรียมพร้อมสำหรับปี 2",
        "ปี 2\nพยายามประคองผลการเรียนในแต่ละวิชาใน ปี 2 ให้อย่างน้อยได้ B และเตรียมพร้อมสำหรับโปรเจคในการทำงาน self study ผ่าน Course เรียนต่างๆและประยุกต์ใช้เพื่อเสริมทักษะใน ปี 2 โดยมุ่งเป้าไปทางอุตสาหกรรมซอฟต์แวร์",
        "ปี 3\nมีความสนใจทางด้านวิชาโท DevOps หรือ DataSci และเตรียมพร้อมสำหรับการฝึกงาน เก็บประสบการณ์และเรียนรู้ในการทำงาน",
        "ปี 4\nศึกษาความรู้เพิ่มเติมเพื่อพร้อมสำหรับการทำงานอย่างเต็มตัว เลือกสายงานที่เหมาะกับความสามารถทางด้าน Hard skill และ Soft skill"
    ],
    person3: [
        "ปี 1\nเรียนตามแผนการเรียนที่มหาวิทยาลัยกำหนด พร้อมทั้งพัฒนาทักษะพื้นฐานและปรับตัวเข้ากับสภาพแวดล้อมการเรียนรู้ใหม่ๆ ผ่านกิจกรรมหรือคอร์สออนไลน์",
        "ปี 2\nโฟกัสไปที่การทำความเข้าใจในเนื้อหาของวิชาหลัก และเริ่มสำรวจความสนใจส่วนตัวในด้านที่อยากพัฒนาต่อ พร้อมตั้งเป้าหมายในการทำเกรดให้ดีขึ้น",
        "ปี 3\nเริ่มลงมือศึกษาเชิงลึกในสายที่สนใจ เช่น เทคโนโลยีการเรียนรู้ของเครื่อง พร้อมทั้งเริ่มวางแผนสำหรับโปรเจกต์สำคัญหรือการฝึกงานในอนาคต",
        "ปี 4\nมุ่งเน้นการพัฒนาโปรเจกต์จบการศึกษา พร้อมทั้งหาโอกาสทำงานพิเศษหรือโครงการที่เกี่ยวข้องกับสายงาน เพื่อเสริมสร้างประสบการณ์จริงและเตรียมความพร้อมสู่การทำงานหลังเรียนจบ"
    ],
    person4: [
        "ปี 1\nเรียนตามไกด์ไลน์ของหลักสูตรที่ทางสาขาได้แนะนำมาและฝึกทักษะบางส่วนจากแหล่งเรียนรู้อื่นๆ",
        "ปี 2\nศึกษาและเน้นไปในด้านที่ตนเองสนใจและพยายามทำเกรดไปให้มากๆ",
        "ปี 3\nมีความสนใจวิชาโททางด้าน ปัญญาประดิษฐ์ พร้อมทั้งพยายามศึกษาเพิ่มเติมเพื่อเตรียมไปทำ Special project",
        "ปี 4\nทำโครงงานเพิ่มเก็บเกี่ยวประสบการณ์รวมทั้งลองรับฟรีแลนซ์เพื่อเพิ่มประสบการณ์ในด้านอื่นๆ ที่ตนเองสนใจ"
    ],
    person5: [
        "ปี 1\nเรียนให้เข้าใจหลักการคิดในการแก้ปัญหา ในการมองปัญหาให้ออก แล้วก็จะทําสิ่งที่ตัวเองสนใจ ในช่วงระหว่างปิดเทอมโดยใช้ความรู้ที่เรียนมาก่อนหน้าในการฝึกฝนตัวเองเช่นการทําเกม หรือการประยุกต์ใน math ในการแก้ปัญหาทางคอมพิวเตอร์ในการวิเคราะห์ข้อมูล",
        "ปี 2\nพยายามเรียนรู้ทักษะใหม่ๆแล้วก็ค้นหาด้านที่ตัวเองสนใจมากยิ่งขึ้น ลองทํางานใหม่ๆกับเพื่อนคนอืนๆด้วยการประยุกต์ใช้ความรู้ที่เรียนมา",
        "ปี 3\nตั้งใจเรียนรู้ด้านที่ตัวเองก็คือวิชาโทที่ตอนนั้นตัวเองสนใจ และเตรียมความพร้อมหาประสบการ์ณจากการทํางานจริง ฝึกการใช้ solf skill ที่จําเป็นต่ออนาคตให้มากขึ้น",
        "ปี 4\n เก็บเกี่ยวประสบการ์ณจากการทํางานจริง ว่าในที่ทํางานหรืองานเข้าทํากันยังไง แล้วก็เลือกงานที่เหมาะสมกับเรามากที่สุดเพื่อที่จะได้เข้ากับความถนัดของตัวเราเองมันจะทําให้เราเก่งมากๆในงานนั้นๆ"
    ],
    person6: [
        "ปี 1\nมีความรู้ขั้นพื้นฐานเกี่ยวกับคอมพิวเตอร์และสามารถแก้ปัญหาขั้นพื้นฐานได้",
        "ปี 2\nหาแนวทางที่ตัวเองสนใจในคอมพิวเตอร์",
        "ปี 3\nมีความรู้เพียงพอในสายวิชาที่ตัวเองสนใจ และเก็บประสบการณ์เพิ่มเติม",
        "ปี 4\nมีความพร้อมในการทำงานมีทักษะในทุกด้านที่เพียงพอต่อการทำงาน"
    ],
    person7: [
        "ปี 1\nตั้งใจเรียนในรายวิชาต่างๆ และฝึกฝนเพื่อเป็นพื้นฐานในการเรียนวิชาต่อๆไปในชั้นปีที่สูงขึ้น ทบทวนตนเองว่ามีความชอบความสนใจด้านไหน เพื่อที่จะได้เลือกเรียนเป็นวิชาโทในปีต่อๆไป พร้อมทั้งใช้เวลาให้เต็มที่ ทั้งการเรียน การทำกิจกรรม และการใช้ชีวิตในรั้วมหาวิทยาลัย",
        "ปี 2\nมุ่งมั่นกับการเรียน รวมถึงสร้างผลงานให้กับตัวเองในหลายๆด้าน ทั้งการทำ project การเข้าร่วมการแข่งขันด้านคอมพิวเตอร์ต่างๆ หรือแม้กระทั่ง การเข้าร่วมการเเข่งขันอื่นๆ ที่สามารถสร้างเสริมประสบการณ์และทักษะที่สามารถต่อยอดในอนาคต",
        "ปี 3\nพัฒนาตัวเองให้พร้อมกับการเข้าสู่สังคมการทำงานอย่างเต็มรูปแบบ เรียนรู้การทำงานแบบ full stack โฟกัสกับการเรียนในรายวิชาโทที่เลือกเรียน โดยมีความสนใจในรายวิชาโท DPDD และ Dev-Ops เตรียมความพร้อมในการฝึกสหกิจ รวมถึงในด้านการทำงานในบริษัทต่างๆ",
        "ปี 4\nเลือกฝึกสหกิจในบริษัทที่มุ่งหวัง อาจไม่จำเป็นต้องฝึกในบริษัทที่เป็นคอมพิวเตอร์โดยตรง แต่เป็นบริษัทที่ต้องการผู้ที่เรียน หรือมีความรู้ทางด้านคอมพิวเตอร์มากเป็นพิเศษ อย่างไรก็ตาม จำเป็นฝึกฝนและพัฒนาตัวเองในทุกด้าน เพื่อที่จะสามารถเข้าไปทำงานในองค์กรที่มีอัตราการแข่งขันสูงตามที่ตั้งเป้าหมายไว้"
    ]
};

// Initialize progress tracking
const progressState = {
    person1: 0,
    person2: 0,
    person3: 0,
    person4: 0,
    person5: 0,
    person6: 0,
    person7: 0
};

// Function to update UI for a specific person
function updateUI(person) {
    const paragraphs = data[person];
    const currentIndex = progressState[person];

    // Update paragraph text
    const paragraphElement = document.querySelector(`#${person}paragraph`);
    paragraphElement.textContent = paragraphs[currentIndex];

    // Enable/Disable buttons
    const prevBtn = document.querySelector(`#${person}prevBtn`);
    const nextBtn = document.querySelector(`#${person}nextBtn`);
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === paragraphs.length - 1;

    // Update progress bar
    const circles = document.querySelectorAll(`.${person}circle`);
    const indicator = document.querySelector(`.${person}indicator`);
    circles.forEach((circle, index) => {
        if (index <= currentIndex) {
            circle.classList.add("completed");
        } else {
            circle.classList.remove("completed");
        }
    });

    const progressPercentage = (currentIndex / (paragraphs.length - 1)) * 100;
    indicator.style.width = `${progressPercentage}%`;
}

// Add event listeners for a person's buttons
function setupListeners(person) {
    const prevBtn = document.querySelector(`#${person}prevBtn`);
    const nextBtn = document.querySelector(`#${person}nextBtn`);

    prevBtn.addEventListener("click", () => {
        if (progressState[person] > 0) {
            progressState[person]--;
            updateUI(person);
        }
    });

    nextBtn.addEventListener("click", () => {
        if (progressState[person] < data[person].length - 1) {
            progressState[person]++;
            updateUI(person);
        }
    });
}

// Initialize each person's progress
function initializePerson(person) {
    updateUI(person);
    setupListeners(person);
}

// Initialize components
initializePerson("person1");
initializePerson("person2");
initializePerson("person3");
initializePerson("person4");
initializePerson("person5");
initializePerson("person6");
initializePerson("person7");