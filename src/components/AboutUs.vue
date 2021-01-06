<template>
    <div>
        <section>
            <SectionHeader  heading="About Roop Organica" :subHeading="constants.COMPANY_LINE"></SectionHeader>
            <div class="col-12">
                <p class="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum? Animi quaerat impedit sint expedita quam possimus inventore iusto aliquam, asperiores dicta ab velit laborum. Voluptates, assumenda sunt? Odit, incidunt.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import SectionHeader from '../views/SectionHeader';
import constants from '../services/constants';
// console.log(constant);
export default {
    components: {
       SectionHeader 
    },
    data(){
        return  {
           constants
        }
    }
}
</script>