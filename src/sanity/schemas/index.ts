// site
import { siteSchema } from './site/site-schema'
import { navigationSchema } from './site/navigation-schema'
import { linkListSchema } from './site/link-list-schema'

// page
import { pageSchema } from './page/page-schema'
import { metaSchema } from './page/meta-schema'

// components
import { ctaSchema } from './components/cta-schema'
import { linkSchema } from './components/link-schema'

// forms
import { formSchema } from './forms/form-builder-schema'
import { formSubmissionSchema } from './forms/form-submission-schema'
import { formInputSchema } from './forms/form-input-schema'
import { formCheckboxSchema } from './forms/form-checkbox-schema'
import { formTextareaSchema } from './forms/form-textarea-schema'
import { formSelectSchema } from './forms/form-select-schema'
import { formRadioSchema } from './forms/form-radio-schema'
import { formNameSchema } from './forms/form-name-schema'
import { formColumnsSchema } from './forms/form-columns-schema'

// blocks
import { accordionBlockSchema } from './blocks/accordion-block-schema'
import { creativeBlockSchema } from './blocks/creative-block-schema'
import { heroBlockSchema } from './blocks/hero-block-schema'
import { htmlBlockSchema } from './blocks/html-block-schema'
import { imageBlockSchema } from './blocks/image-block-schema'
import { sliderBlockSchema } from './blocks/slider-block-schema'
import { textBlockSchema } from './blocks/text-block-schema'
import { formBlockSchema } from './blocks/form-block-schema'

export const schemaTypes = [
    accordionBlockSchema,
    creativeBlockSchema,
    ctaSchema,
    heroBlockSchema,
    htmlBlockSchema,
    imageBlockSchema,
    linkListSchema,
    linkSchema,
    metaSchema,
    navigationSchema,
    pageSchema,
    siteSchema,
    sliderBlockSchema,
    textBlockSchema,
    formSchema,
    formBlockSchema,
    formSubmissionSchema,
    formInputSchema,
    formCheckboxSchema,
    formTextareaSchema,
    formSelectSchema,
    formRadioSchema,
    formNameSchema,
    formColumnsSchema,
]
