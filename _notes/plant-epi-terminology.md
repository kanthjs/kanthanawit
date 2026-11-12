# แนวทางใช้ศัพท์ระบาดวิทยาโรคพืช (Plant Disease Epidemiology) ในบล็อก

> โน้ตภายใน ไม่ถูก render (โฟลเดอร์ `_notes/` ไม่อยู่ใน `project.render` ของ `_quarto.yml`)
> ร่างเมื่อ 2026-11-10

## 0. กติกาหลัก 3 ระดับ

| ระดับ | ใช้เมื่อ | รูปแบบที่เขียน | ตัวอย่าง |
|---|---|---|---|
| **A. คงภาษาอังกฤษเสมอ** | ชื่อโมเดล, พารามิเตอร์, ตัวย่อ, ศัพท์โมเลกุล, หน่วยจำแนกต่ำกว่าสปีชีส์ | อังกฤษล้วน (ตัวย่อให้เขียนเต็มครั้งแรก) | AUDPC, Logistic model, $r$, $R_0$, PTI/ETI, pv., f. sp., race |
| **B. ทับศัพท์ไทยได้** | คำนามทางชีววิทยาที่วงการไทยใช้ทับศัพท์อยู่แล้ว | ทับศัพท์ไทย + อังกฤษในวงเล็บครั้งแรก | อิโนคูลัม (inoculum), ไอโซเลต (isolate), สเตรน (strain), สปอร์ |
| **C. แปลไทยได้ แต่ต้องวงเล็บ** | มีคำไทยมาตรฐาน แต่คำไทยนั้นตรงกับศัพท์อังกฤษหลายคำ | ไทย (English) ครั้งแรก แล้วใช้คำเดิมทั้งบทความ | ความต้านทาน (resistance), ความทนทาน (tolerance) |

กติกาเสริม:

1. **หนึ่งบทความ ใช้หนึ่งคำต่อหนึ่งความหมาย** ถ้าเลือกใช้คำว่า "severity" ก็ห้ามสลับไปใช้ "ความเสียหาย" ในความหมายเดียวกัน
2. **ใช้ศัพท์ให้ตรงกับชื่อตัวแปรในโค้ด** ถ้าคอลัมน์ชื่อ `severity_pct` คำอธิบายภาษาไทยต้องเป็น disease severity ไม่ใช่ "ความเสียหาย"
3. **ตัวเอียง** ใช้กับชื่อวิทยาศาสตร์, ชื่อยีน (*Avr*, *Pi9*) และ *forma specialis* ส่วนตัวย่อ pv., f. sp. ใช้ตัวตรง
4. **อย่าใช้คำว่า "สายพันธุ์" กับเชื้อ** ให้ระบุให้ชัดว่าเป็น isolate, strain, race, pathovar หรือ biotype ส่วนคำว่า "พันธุ์" ใช้กับพืชเท่านั้น (cultivar/variety)

---

## 1. คำที่แปลไทยแล้วชนกัน (ความเสี่ยงสูงสุด)

| English | ระดับ | คำไทยที่ทำให้สับสน | หมายเหตุ / การแก้ไขจากร่างเดิม |
|---|---|---|---|
| Pathogenicity | A/C | "ความสามารถก่อโรค" | เป็นเชิงคุณภาพ คือก่อโรคได้หรือไม่ได้ |
| Virulence | **A** | "ความรุนแรง" | ⚠️ **มีสองสำนัก**: สาย Vanderplank/พันธุศาสตร์ใช้ในความหมายเชิงคุณภาพ คือการเอาชนะ *R*-gene จำเพาะ แต่ตำราอเมริกันหลายเล่ม (เช่น Agrios) ใช้ในความหมาย *ระดับ* ของ pathogenicity ซึ่งเป็นเชิงปริมาณ ควรเขียนนิยามที่ใช้กำกับไว้ทุกครั้ง |
| Avirulence (*Avr*) | A | — | ปรับถ้อยคำ: เชื้อมี effector ที่ถูก **R protein ที่ตรงคู่กัน** ตรวจจับ จึงเข้าทำลายไม่สำเร็จ *เฉพาะพันธุ์ที่มียีน R คู่นั้น* ไม่ได้แปลว่าเข้าทำลายพันธุ์อื่นไม่ได้ |
| Aggressiveness | A | "ความรุนแรง" | เชิงปริมาณ ไม่จำเพาะกับพันธุ์ เช่น latent period สั้น หรือสร้างสปอร์มาก |
| Disease incidence | **A** | "อุบัติการณ์", "อัตราการเป็นโรค" | สัดส่วนหน่วยที่เป็นโรค (binary) ⚠️ ชนกับ **Incidence Rate Ratio (IRR)** ในโมเดล count ซึ่งเป็นอัตราส่วนค่าเฉลี่ยจำนวนนับ ไม่ใช่ disease incidence |
| Disease severity | **A** | "ความรุนแรง", "ความเสียหาย" | % พื้นที่เนื้อเยื่อที่เป็นโรค **ไม่ใช่** yield loss/damage |
| Disease intensity | A | "ปริมาณโรค" | คำรวมที่ครอบคลุมทั้ง incidence และ severity |
| Prevalence | A | "การระบาด" | สัดส่วนแปลงหรือพื้นที่ที่พบโรค (ระดับภูมิภาค) |
| Damage / Yield loss | C | "ความเสียหาย" | ใช้เฉพาะผลกระทบต่อผลผลิต แยกให้ชัดจาก severity |
| Incubation period | A/C | "ระยะฟักตัว" | จากการติดเชื้อถึงการแสดงอาการ (symptom) |
| Latent period | **A** | "ระยะฟักตัว", "ระยะแฝง" | จากการติดเชื้อถึงการสร้างสปอร์ (sporulation) ⚠️ ห้ามแปลว่า "ระยะฟักตัว" เพราะจะชนกับ incubation |
| Infectious period | A | "ระยะติดต่อ" | ช่วงเวลาที่แผลยังปล่อยเชื้อได้ |
| Resistance | C | "ต้านทาน" ↔ "ทนทาน" | ความต้านทาน (resistance) คือจำกัดการเข้าทำลายหรือการเพิ่มจำนวนของเชื้อ |
| Tolerance | C | "ทนทาน" | ความทนทาน (tolerance) คือเป็นโรคพอๆ กับพันธุ์อ่อนแอ แต่ผลผลิตลดน้อย ⚠️ ระวังคำว่า "stress-tolerant" (ทนสภาพแวดล้อม) ซึ่งเป็นอีกบริบทหนึ่ง |
| Disease escape | A | "หนีโรค" | ไม่เป็นโรคเพราะจังหวะเวลาหรือสภาพแวดล้อม ไม่ใช่เพราะยีน |
| **Susceptible ↔ Sensitive** *(เพิ่ม)* | C | "อ่อนแอ" / "ความไว" | susceptible ใช้กับ **พืช** ต่อโรค, sensitive ใช้กับ **เชื้อ** ต่อสารเคมี (EC₅₀) ⚠️ "ความไว" ยังชนกับ **sensitivity** ของ ROC อีกด้วย |
| **Infection ↔ Infestation** *(เพิ่ม)* | C | "การระบาด", "การเข้าทำลาย" | infection ใช้กับเชื้อโรค, infestation ใช้กับแมลงหรือการปนเปื้อนในดิน/เมล็ด |
| **Symptom ↔ Sign** *(เพิ่ม)* | C | "อาการ" | symptom คือการตอบสนองของพืช, sign คือตัวเชื้อที่มองเห็นได้ (เส้นใย สปอร์ sclerotia) |
| **Epidemic ↔ Endemic** *(เพิ่ม)* | C | "การระบาด" / "โรคประจำถิ่น" | — |
| **Inoculation ↔ Infection** *(เพิ่ม)* | C | "การปลูกเชื้อ" / "การติดเชื้อ" | การปลูกเชื้อไม่จำเป็นต้องทำให้เกิดการติดเชื้อเสมอไป |

## 2. วงจรการระบาดและแบบจำลองเชิงปริมาณ (ระดับ A ทั้งหมด)

| English | หมายเหตุ / การแก้ไขจากร่างเดิม |
|---|---|
| Monocyclic / Polycyclic / Polyetic epidemic | ใช้ตามร่างได้ หรือจะใช้คำไทย "วงจรเดียว / หลายวงจร" ในวงเล็บก็ได้ |
| Disease Progress Curve (DPC) | — |
| AUDPC, rAUDPC (และ AUDPS) | เขียนคำเต็มเมื่อใช้ครั้งแรก |
| Apparent infection rate ($r$) | ⚠️ **แก้ร่างเดิม**: คำว่า "apparent" หมายถึงคำนวณจากโรคที่ *มองเห็นได้* ไม่ใช่จาก "เนื้อเยื่อที่เป็นโรคจริง" ค่านี้จึงไม่รวมการติดเชื้อที่ยังอยู่ใน latent period และมักต่ำกว่าอัตราที่แท้จริง |
| Basic reproduction number ($R_0$) | ใช้ได้ตามร่าง |
| Monomolecular model | ⚠️ **ปรับถ้อยคำ**: $dy/dt = r(1-y)$ อัตราเป็นสัดส่วนกับ **เนื้อเยื่อปกติที่เหลืออยู่** โดยที่ inoculum คงที่ (ไม่มี secondary infection) |
| Logistic model | $dy/dt = r\,y(1-y)$ |
| Gompertz, Richards model | Richards มีพารามิเตอร์รูปร่างเพิ่ม และครอบคลุมโมเดลอื่นเป็นกรณีพิเศษ |
| Logit, Gompit (และ Monit) | ใช้แปลงสัดส่วนโรคให้เป็นเส้นตรง ตามโมเดลแต่ละตัว |
| Carrying capacity ($K$) / Asymptote | — |
| Multiple infection transformation | ของ Gregory: $\ln[1/(1-y)]$ |

## 3. ระบาดวิทยาเชิงพื้นที่ (ระดับ A)

| English | คำไทยที่ทำให้สับสน | หมายเหตุ |
|---|---|---|
| Focus / Foci | "จุดระบาด" | — |
| Disease gradient ↔ Dispersal gradient | "การกระจาย" | อันแรกวัดจาก **โรค** อันหลังวัดจาก **สปอร์** ควรแยกกัน |
| **Spatial pattern ↔ Dispersal** *(เพิ่ม)* | "การกระจายตัวของโรค" | ⚠️ คำไทยเดียวกันแต่คนละเรื่อง: spatial pattern คือรูปแบบที่สังเกตได้ในขณะหนึ่ง (aggregated/random) ส่วน dispersal คือกระบวนการเคลื่อนที่ของเชื้อ |
| Spatial autocorrelation | — | — |
| Aggregated / Clustered vs Random (vs Regular) | "กระจุก", "สุ่ม" | ควรเพิ่ม regular/uniform เพื่อให้ครบทั้งสามแบบ |
| Taylor's power law, Index of dispersion | — | — |
| Semivariogram (nugget, sill, range), SADIE | — | — |
| Volumetric spore trap (Burkard) | — | — |

## 4. ชีววิทยาของเชื้อและหน่วยจำแนกต่ำกว่าสปีชีส์

| English | ระดับ | ทับศัพท์แนะนำ | หมายเหตุ |
|---|---|---|---|
| Inoculum (primary / secondary) | B | อิโนคูลัม | — |
| Propagule | A/B | โพรพากูล | ใช้หน่วยเช่น propagules g⁻¹ soil |
| Biotroph / Necrotroph / Hemibiotroph | A | — | — |
| Isolate | B | **ไอโซเลต** | ⚠️ ตามหลักทับศัพท์ราชบัณฑิตฯ ตัวสะกด t ใช้ "ต" ร่างเดิมเขียนว่า "ไอโซเลท" |
| Strain | B | สเตรน | — |
| Pathovar (pv.) | A | — | จำแนกตาม host range หรือ pathogenicity บนพืชอาศัย |
| *Forma specialis* (f. sp.) | A | — | พหูพจน์คือ *formae speciales* |
| Physiological race | A | — | จำแนกด้วย differential cultivars ⚠️ ห้ามใช้คำว่า "สายพันธุ์" |
| Biotype | A | — | ⚠️ ใช้กับ **เพลี้ยกระโดดสีน้ำตาล** ด้วย ซึ่งเกี่ยวกับบล็อกนี้โดยตรง |
| Mating type (A1/A2) | A | — | *Phytophthora* เป็น **oomycete** ไม่ใช่เชื้อรา ร่างเดิมจัดรวมไว้ในกลุ่ม "เชื้อรา" |
| Appressorium, Haustorium, Sclerotium, Chlamydospore, Zoospore | A | — | พหูพจน์: -ia, -ia, -ia, -s, -s |

## 5. พันธุศาสตร์ความต้านทานและกลไกระดับโมเลกุล (ระดับ A)

| English | หมายเหตุ / การแก้ไขจากร่างเดิม |
|---|---|
| Gene-for-gene (Flor) | — |
| Vertical / Horizontal resistance | ⚠️ ไม่ได้ **เท่ากับ** qualitative/quantitative ทุกกรณี นิยามของ Vanderplank คือ race-specific ↔ race-nonspecific ซึ่งเป็นคนละแกนกับ "ใหญ่/เล็ก" ของผลกระทบ จึงควรเขียนว่า "มักสอดคล้องกับ" ไม่ใช่ "คือ" |
| Slow-rusting / Rate-reducing resistance | ลด $r$, ยืด latent period, แผลเล็กลงหรือน้อยลง |
| Boom-and-bust cycle | — |
| Effector, PAMP/MAMP, PTI, ETI, HR | — |
| Multiline, Cultivar mixture, Gene pyramiding | — |

## 6. การประเมินความสูญเสียผลผลิตและการดื้อสารเคมี

| English | ระดับ | หมายเหตุ |
|---|---|---|
| Yield potential / Attainable / Actual yield | A | ตามกรอบของ Zadoks และ Savary: defining → limiting → reducing factors |
| EIL, ET / Action threshold | A | ET ต่ำกว่า EIL ในวงการโรคพืชนิยมใช้คำว่า action threshold มากกว่า |
| Fitness penalty / cost | A | — |
| Cross-resistance ↔ Multiple resistance | A/C | cross-resistance คือกลไก (target site) เดียวกัน ส่วนใหญ่เป็นกลุ่ม FRAC เดียวกัน ยังมี **negative cross-resistance** อีกด้วย |
| EC₅₀, Baseline sensitivity *(เพิ่ม)* | A | — |
| ROC curve, Sensitivity, Specificity, Cut-off | A | ⚠️ "sensitivity" ในที่นี้คือ true positive rate ไม่ใช่ความไวของเชื้อต่อสารเคมี |

---

## 7. จุดที่พบในบล็อก (ยังไม่ได้แก้)

| ไฟล์ | บรรทัด | ปัจจุบัน | ควรเป็น |
|---|---|---|---|
| `blog/2026-11-05-rtip4/index.qmd` | 78, 81 | `severity_pct` = "เปอร์เซ็นต์ความเสียหาย", status = "ความรุนแรงประเมินจากความเสียหาย" | "disease severity (% พื้นที่ใบที่เป็นโรค)" แต่ถ้าตั้งใจให้เป็นความเสียหายจริง ควรเปลี่ยนชื่อคอลัมน์ |
| `blog/2026-11-05-rtip4/index.qmd` | 64 | เพลี้ยกระโดด "30% ของพื้นที่" ถูกใส่ลง `severity_pct` | เป็นสัดส่วนพื้นที่ที่พบแมลง (infestation/incidence) ไม่ใช่ severity |
| `blog/2026-11-05-rtip4/index.qmd` | 66, 101 | "โรคใบไหม้" | ระบุให้ชัดว่าเป็น โรคไหม้ (blast) หรือ blight |
| `blog/2026-11-03-tidytue2-031124/index.qmd` | 123 | "อัตราส่วนอุบัติการณ์ (IRR)" | "Incidence Rate Ratio (IRR; อัตราส่วนค่าเฉลี่ยจำนวนนับ)" และใส่หมายเหตุว่าไม่ใช่ disease incidence |
| `blog/2026-11-03-tidytue2-031124/index.qmd` | 62, 108 | "การระบาดของแมลง", "แมลงระบาดหนัก" | "ความหนาแน่นของแมลง (insect density/infestation)" |
| `blog/2026-11-03-tidytue2-031124/index.qmd` | 58 | Clumped / Aggregated / Contagious | ใช้ได้แล้ว อาจเพิ่มการโยงไปยัง Taylor's power law |
| `blog/2026-10-29-pvaluein2026/index.qmd` | 63 | "อัตราการเป็นโรค" | ระบุว่าเป็น incidence หรือ severity |
| `blog/2026-10-29-pvaluein2026/index.qmd` | 9 | "ยับยั้งเชื้อ" | เช่น "ยับยั้งการเจริญของเส้นใย (mycelial growth inhibition)" |
| `blog/2026-10-30-pmore05/index.qmd` | 89 | "ลดการระบาดของโรคพืช 35%" | ระบุตัวชี้วัด เช่น AUDPC, severity หรือ incidence |
| `blog/2026-11-08-rtip7-mapgl/index.qmd` | 149, 157 | "สถานการณ์การระบาด" | "disease intensity" หรือ "prevalence" ตามข้อมูลที่ใช้จริง |
| `blog/2026-11-09-rtip8-quickr/index.qmd` | 207 | "การกระจายตัวของโรค" | "spatial pattern" หรือ "dispersal" |
| `blog/2026-11-10-tidytue3-finlay-wilkinson/index.qmd` | 253, 434 | "ทนทาน" (stress-tolerant) อยู่ใกล้ "เปราะบางต่อโรค" | คงคำว่า "stress-tolerant" ไว้ และถ้าพูดถึงโรคให้ใช้ resistance/susceptibility |
