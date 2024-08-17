// site
import { linkListSchema } from './site/link-list-schema'
import { navigationSchema } from './site/navigation-schema'
import { siteSchema } from './site/site-schema'

// page
import { metaSchema } from './page/meta-schema'
import { pageSchema } from './page/page-schema'

// components
import { ctaSchema } from './components/cta-schema'
import { linkSchema } from './components/link-schema'
import { imageUrlSchema } from './components/image-url-schema'

// forms
import { formCheckboxSchema } from './forms/form-checkbox-schema'
import { formColumnsSchema } from './forms/form-columns-schema'
import { formInputSchema } from './forms/form-input-schema'
import { formNameSchema } from './forms/form-name-schema'
import { formRadioSchema } from './forms/form-radio-schema'
import { formSchema } from './forms/form-builder-schema'
import { formSelectSchema } from './forms/form-select-schema'
import { formSubmissionSchema } from './forms/form-submission-schema'
import { formTextareaSchema } from './forms/form-textarea-schema'

// blocks
import { accordionBlockSchema } from './blocks/accordion-block-schema'
import { creativeBlockSchema } from './blocks/creative-block-schema'
import { formBlockSchema } from './blocks/form-block-schema'
import { heroBlockSchema } from './blocks/hero-block-schema'
import { htmlBlockSchema } from './blocks/html-block-schema'
import { imageBlockSchema } from './blocks/image-block-schema'
import { sliderBlockSchema } from './blocks/slider-block-schema'
import { statsBlockSchema } from './blocks/stats-block-schema'
import { skillsBlockSchema } from './blocks/skills-block-schema'
import { textBlockSchema } from './blocks/text-block-schema'

export const schemaTypes = [
    accordionBlockSchema,
    creativeBlockSchema,
    ctaSchema,
    formBlockSchema,
    formCheckboxSchema,
    formColumnsSchema,
    formInputSchema,
    formNameSchema,
    formRadioSchema,
    formSchema,
    formSelectSchema,
    formSubmissionSchema,
    formTextareaSchema,
    heroBlockSchema,
    htmlBlockSchema,
    imageBlockSchema,
    imageUrlSchema,
    linkListSchema,
    linkSchema,
    metaSchema,
    navigationSchema,
    pageSchema,
    siteSchema,
    sliderBlockSchema,
    skillsBlockSchema,
    statsBlockSchema,
    textBlockSchema,
]
