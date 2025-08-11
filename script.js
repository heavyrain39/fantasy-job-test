document.addEventListener('DOMContentLoaded', () => {

    // --- 데이터 영역 (이전과 동일) ---
    const questions = [
        { q: "오랜 여정을 마치고 당신의 앞에 두 갈래의 휴식처가 나타났습니다. 한 곳은 따뜻한 모닥불 주위에 모여 앉아 이야기와 음식을 나누는 활기찬 야영지입니다. 다른 한 곳은 희미한 폭포 소리가 들려오는 숨겨진 동굴입니다. 당신의 발걸음은 어디로 향하나요?", a: "활기찬 야영지에서 다른 이들과 교류하며 피로를 풉니다.", b: "고요한 동굴에서 조용한 시간을 가지며 에너지를 회복합니다." },
        { q: "당신이 속한 왕국에 가뭄이 들어 모두가 고통받고 있습니다. 당신은 단 하나뿐인 마법 우물을 사용할 권한을 얻었습니다. 이 우물물을 어떻게 사용하시겠습니까?", a: "공정하게, 원칙에 따라 모든 이에게 똑같이 나누어 줍니다.", b: "가장 도움이 절실한 이들에게 먼저, 그리고 더 많이 나누어 줍니다." },
        { q: "미지의 대륙을 탐험하기 위한 원정대를 꾸리게 되었습니다. 당신은 새로운 것을 배울 때 어떤 방식을 선호하시나요?", a: "지도와 나침반만 들고 직접 부딪혀보며 길을 찾습니다. 실제 경험을 통해 배우는 것이 가장 빠릅니다.", b: "그 땅에 대해 기록된 고문서를 연구합니다. 우선 지식을 갖추고 계획을 세워 안전한 길을 찾아야 합니다." },
        { q: "당신의 오랜 친구가 현실적으로 성공하기 어려운 꿈에 도전하겠다며 당신을 찾아왔습니다. 당신은 친구에게 어떤 조언을 해주고 싶으신가요?", a: "친구가 보지 못하는 어려움과 위험 요소를 짚어주어 더 나은 판단을 하도록 돕습니다.", b: "그의 열정과 꿈의 가치를 응원해 줍니다. 그의 마음을 지지하는 것이 더 중요합니다." },
        { q: "당신은 성대한 왕궁의 연회에 초대되었습니다. 수많은 귀족과 학자, 예술가들이 모여 있습니다. 당신은 주로 어떤 모습으로 그곳에 머무르게 될까요?", a: "여러 그룹을 오가며 다양한 사람들과 폭넓은 대화를 나누고, 연회의 전반적인 분위기를 즐깁니다.", b: "마음에 드는 한두 사람과 연회장 한쪽에서 깊이 있는 주제로 오랜 시간 대화를 나누는 것을 선호합니다." },
        { q: "당신이 지켜야 할 마을에 큰 위기가 닥쳤습니다. 희생 없이는 마을을 구할 수 없는 상황. 당신의 결정에 가장 큰 영향을 미치는 것은 무엇인가요?", a: "가장 많은 사람을 구할 수 있는 최선의 결과를 도출하는 것.", b: "사람들의 마음을 배려하고, 공동체의 조화가 깨지지 않도록 하는 것." },
        { q: "새로운 마법 기술을 배우려고 합니다. 어떤 환경에서 가장 학습 효율이 오를 것 같나요?", a: "다른 마법사들과 함께 토론하고 실습하며, 서로의 아이디어를 즉각적으로 교환할 수 있는 스터디 그룹.", b: "누구의 방해도 받지 않는 나만의 서재에서, 원리를 완벽히 이해할 때까지 파고들 수 있는 혼자만의 시간." },
        { q: "당신은 재판관으로서, 법을 어겼지만 그럴 수밖에 없었던 딱한 사정이 있는 사람을 심판해야 합니다. 당신의 판결은 어디에 더 무게를 둘까요?", a: "법은 누구에게나 공평하게 적용되어야 합니다.", b: "법의 목적은 결국 사람을 위한 것입니다." },
        { q: "복잡하고 어려운 문제를 해결해야 할 때, 당신의 첫 번째 행동은 무엇인가요?", a: "즉시 사람을 모아 회의를 열고, 그들의 의견을 들으며 해결의 실마리를 찾아 나섭니다.", b: "한 걸음 물러나 문제의 구조를 생각하고, 혼자만의 생각 속에서 여러 해결책을 굴려 봅니다." },
        { q: "당신이 이끄는 팀이 큰 성공을 거두었습니다. 보상을 분배해야 할 때, 가장 신경 쓰이는 부분은 무엇인가요?", a: "공정한 몫을 정확하게 분배하는 것.", b: "모두가 소외되지 않고 기쁨을 나누는 것." },
        { q: "당신에게 '가장 가치 있는 정보'란 어떤 것인가요?", a: "세상에 나가 몸으로 경험하고 사람들과의 관계 속에서 얻게 되는 생생하고 실질적인 지혜.", b: "독서, 깊은 사색과 통찰을 통해 깨닫게 되는, 시대를 관통하는 보편적인 진리나 법칙." },
        { q: "당신의 동료 중 한 명이 팀의 규칙을 계속해서 어깁니다. 하지만 그는 팀의 분위기를 즐겁게 만드는 중요한 사람이기도 합니다. 당신은 어떻게 행동하시겠습니까?", a: "그가 행동을 바꾸는 것이 모든 사람에게 이익이라는 사실을 이해시킵니다.", b: "그를 따로 만나 입장을 먼저 들어보고, 그가 규칙을 지키도록 유도합니다." }
    ];
    
    const results = {
        swordsman: {
            title: "검사",
            slogan: "정의로운 행동가, 현실을 개척하는 리더",
            content: `<p>당신은 혼돈 속에서 질서를 잡고, 불확실한 상황에서 나아갈 길을 제시하는 사람입니다. 마치 숙련된 검사처럼, 당신은 복잡하게 얽힌 문제의 핵심을 정확히 꿰뚫어보고, 가장 효율적인 해결책을 찾아냅니다. 당신의 존재감은 단지 생각이나 말에 머무르지 않고, 구체적인 행동과 실질적인 결과로 증명됩니다. 주변 사람들은 어려운 문제에 부딪혔을 때, 당신의 명쾌한 판단력과 흔들리지 않는 책임감을 떠올리게 될 것입니다.</p>
                      <h3>당신은 이런 사람입니다</h3>
                      <ul>
                        <li><strong>생각에만 머무르지 않고 즉시 행동으로 옮깁니다.</strong> 당신에게 계획은 책상 서랍에 넣어두는 장식품이 아닙니다. 목표가 정해지면, 가장 논리적이고 빠른 길을 찾아 곧바로 실행에 옮기는 강력한 추진력을 가지고 있습니다. 때로는 이러한 속도감이 다른 사람들을 놀라게 하기도 하지만, 결국 당신의 행동이 만들어내는 가시적인 성과는 모두를 납득시킵니다.</li>
                        <li><strong>객관성과 공정성을 무엇보다 중요한 가치로 여깁니다.</strong> 당신은 사적인 감정이나 불분명한 관계보다는 명확한 원칙과 기준에 따라 상황을 판단하는 것을 선호합니다. 이 때문에 당신은 때로 차갑거나 계산적으로 보일 수 있다는 말을 듣기도 하지만, 사실 이는 모두를 위한 가장 공정한 결과를 이끌어내려는 당신만의 방식입니다. 당신의 결정은 언제나 탄탄한 논리를 기반으로 하기에, 사람들은 그 결정을 신뢰합니다.</li>
                        <li><strong>자신도 모르는 사이에 리더의 역할을 맡고 있을 때가 많습니다.</strong> 당신이 의도적으로 나서는 것이 아님에도 불구하고, 사람들은 자연스럽게 당신을 중심으로 모여듭니다. 이는 당신이 위기 상황에서 보여주는 침착함과, 방향을 잃었을 때 제시하는 명확한 비전 덕분입니다. 당신은 자신이 가진 책임의 무게를 알고 있으며, 기꺼이 그 짐을 짊어질 준비가 되어 있습니다.</li>
                        <li><strong>자신이 '내 사람'이라고 여기는 이들에게는 놀라울 정도의 헌신과 의리를 보여줍니다.</strong> 겉으로는 무뚝뚝하고 현실적으로 보이지만, 당신의 마음속에는 스스로 정한 경계선이 있습니다. 그리고 그 경계선 안으로 들어온 동료나 친구, 가족에게 위협이 가해진다면, 당신은 그 누구보다 먼저 앞장서서 그들을 지키기 위해 당신의 검을 뽑아 들 것입니다.</li>
                      </ul>
                      <h3>당신의 빛나는 강점</h3>
                      <ul>
                        <li><strong>결단력과 추진력:</strong> 불확실성 속에서도 핵심을 파악하고 신속하게 결정을 내립니다. 당신의 이러한 능력은 조직이나 그룹이 방향을 잃고 표류할 때 가장 강력한 등대가 되어줍니다.</li>
                        <li><strong>현실적인 문제 해결 능력:</strong> 추상적인 이론보다는 실질적인 데이터와 현실에 기반하여 문제를 해결합니다. 당신의 손을 거치면 막연했던 계획이 구체적인 현실이 됩니다.</li>
                        <li><strong>타고난 리더십과 책임감:</strong> 사람들을 이끌고 목표를 향해 나아가게 하는 힘이 있습니다. 주어진 임무는 반드시 완수해내는 강한 책임감으로 주변에 깊은 신뢰감을 줍니다.</li>
                      </ul>
                      <h3>성장을 위한 제언</h3>
                      <ul>
                        <li><strong>때로는 과정의 즐거움을 느껴보세요.</strong> 당신의 시선은 늘 결과와 효율성에 맞춰져 있습니다. 물론 그것은 엄청난 강점이지만, 가끔은 목표를 향해 가는 길 위에서 만나는 사람들과의 교감이나 사소한 즐거움에도 눈을 돌려보는 것은 어떨까요? 모든 여정이 직선일 필요는 없으며, 때로는 잠시 쉬어가며 주변을 둘러보는 것이 더 멀리 나아갈 힘을 주기도 합니다.</li>
                        <li><strong>'정답'이 아닌 '해답'을 찾아보세요.</strong> 당신의 논리적인 기준은 대부분의 상황에서 가장 올바른 '정답'을 제시합니다. 하지만 사람의 마음이 얽힌 문제에는 정답이 없는 경우도 많습니다. 때로는 논리적인 옳고 그름을 따지기보다, 상대방의 감정을 먼저 이해하고 공감하는 것이 모두가 만족하는 '해답'에 더 가까울 수 있다는 사실을 기억해주세요.</li>
                      </ul>
                      <blockquote>세상은 당신의 행동으로 인해 한 걸음 앞으로 나아갑니다. 당신의 가장 위대한 검은 손에 든 강철이 아니라, 가슴에 품은 신념과 책임감입니다.</blockquote>`
        },
        mage: {
            title: "마법사",
            slogan: "지혜로운 탐구자, 세상의 이치를 꿰뚫는 전략가",
            content: `<p>당신은 세상의 표면 아래에서 작동하는 거대한 원리와 법칙을 탐구하는 사람입니다. 마치 고대의 지식을 탐독하는 마법사처럼, 당신은 현상의 이면에 숨겨진 본질을 꿰뚫어 보고, 복잡한 시스템의 작동 방식을 이해하는 데서 깊은 희열을 느낍니다. 당신의 힘은 겉으로 드러나는 화려함이 아닌, 누구도 모방할 수 없는 깊이 있는 사고와 전략적 통찰력에서 나옵니다. 모두가 눈앞의 혼란에 빠져있을 때, 당신은 고요히 한 걸음 물러나 모든 것을 관통하는 최적의 해법을 찾아냅니다.</p>
                      <h3>당신은 이런 사람입니다</h3>
                      <ul>
                        <li><strong>'왜?'라는 질문을 멈추지 않는 지적 탐험가입니다.</strong> 당신은 무언가를 그저 받아들이는 법이 없습니다. 당신의 정신은 항상 세상의 근본적인 원리를 향한 호기심으로 가득 차 있으며, 하나의 사실을 알게 되면 그와 연결된 수많은 지식의 가지로 탐구를 뻗어 나갑니다. 이 때문에 당신은 특정 분야에 대해 놀라울 정도로 깊이 있는 전문가가 되곤 합니다.</li>
                        <li><strong>고요한 혼자만의 시간은 당신에게 가장 강력한 마법 시전 시간입니다.</strong> 당신에게 고독은 외로움이 아니라, 내면의 무한한 생각과 아이디어를 정리하고 재구성하는 필수적인 과정입니다. 가장 명쾌한 통찰과 창의적인 해결책은 바로 이 고요함 속에서 탄생합니다. 당신의 정신은 거대한 도서관과 같아서, 집중할 수 있는 조용한 환경이 주어졌을 때 비로소 그 진가를 발휘합니다.</li>
                        <li><strong>비효율성과 비논리적인 주장을 견디기 힘들어합니다.</strong> 당신은 세상을 하나의 거대한 시스템으로 인식하며, 모든 것은 명확한 인과관계와 논리로 설명될 수 있어야 한다고 믿습니다. 이 때문에 앞뒤가 맞지 않는 이야기나 감정에만 호소하는 주장을 마주할 때, 당신은 내면의 질서가 어지럽혀지는 듯한 불편함을 느낍니다.</li>
                        <li><strong>평소에는 과묵하지만, 핵심을 짚는 한마디로 상황을 정리합니다.</strong> 당신은 생각의 깊이에 비해 말수가 적은 편입니다. 대화에 참여하기보다는 주로 듣고 관찰하며 상황의 전체적인 구조를 파악합니다. 하지만 논의가 길을 잃거나 핵심에서 벗어났을 때, 당신이 던지는 한마디는 종종 모든 것을 제자리로 돌려놓는 놀라운 힘을 가집니다.</li>
                      </ul>
                      <h3>당신의 빛나는 강점</h3>
                      <ul>
                        <li><strong>깊이 있는 분석력과 통찰력:</strong> 누구도 보지 못하는 문제의 근본 원인을 파악하고, 현상 너머의 패턴을 읽어내는 능력이 탁월합니다.</li>
                        <li><strong>뛰어난 전략적 사고:</strong> 당장의 문제 해결을 넘어, 앞으로 발생할 수 있는 여러 가능성을 예측하고 장기적인 관점에서 최적의 계획을 수립합니다.</li>
                        <li><strong>지적 정직함과 객관성:</strong> 개인적인 감정이나 편견에 휘둘리지 않고, 오직 사실과 논리에 기반하여 가장 이성적인 판단을 내립니다. 당신의 객관성은 그룹에 신뢰할 수 있는 방향을 제시합니다.</li>
                      </ul>
                      <h3>성장을 위한 제언</h3>
                      <ul>
                        <li><strong>때로는 당신의 지식을 세상의 언어로 번역해주세요.</strong> 당신의 머릿속에 있는 정교하고 논리적인 아이디어는 그 자체로 완벽할지 모릅니다. 하지만 다른 사람들은 당신만큼 깊이 생각하지 못했을 수 있습니다. 당신의 뛰어난 통찰을 다른 사람들에게 공유할 때, 조금 더 쉽고 단순한 언어로 단계별로 설명해주는 노력이 더해진다면, 당신의 지혜는 세상을 바꾸는 더 강력한 힘을 갖게 될 것입니다.</li>
                        <li><strong>논리라는 지도에 '감정'이라는 변수를 추가해보세요.</strong> 세상은 언제나 당신의 예상처럼 논리적으로만 움직이지는 않습니다. 사람의 마음은 복잡하고 비이성적인 방식으로 작동하기도 합니다. 다른 사람의 감정을 이해하고 고려하는 것은 당신의 논리를 포기하는 것이 아니라, 오히려 당신의 완벽한 전략에 성공 확률을 높여주는 마지막 핵심 변수를 추가하는 것과 같습니다.</li>
                      </ul>
                      <blockquote>당신이 밝히는 지혜의 등불은 세상이 나아갈 길을 비춥니다. 당신의 가장 강력한 마법은 복잡한 세상의 이치를 꿰뚫어 보는 당신의 깊은 사고 그 자체입니다.</blockquote>`
        },
        archer: {
            title: "궁수",
            slogan: "열정적인 이상주의자, 사람들의 마음을 움직이는 선구자",
            content: `<p>당신은 현실에 안주하기보다 더 나은 미래의 가능성을 향해 시선을 고정하는 사람입니다. 마치 먼 곳의 과녁을 조준하는 궁수처럼, 당신은 남들이 보지 못하는 잠재력을 발견하고 그곳을 향해 희망이라는 화살을 쏘아 올립니다. 당신의 진정한 힘은 사람들의 마음을 움직여, 그 화살의 궤적을 함께 바라보게 만드는 긍정적인 에너지와 영감에 있습니다. 당신이 있기에 사람들은 더 높은 목표를 꿈꾸고, 불가능해 보였던 여정에 기꺼이 동참하게 됩니다.</p>
                      <h3>당신은 이런 사람입니다</h3>
                      <ul>
                        <li><strong>'무엇이 될 수 있을까?'라는 상상으로 가슴이 뜁니다.</strong> 당신은 현재의 모습보다는 앞으로 펼쳐질 무한한 가능성에 더 큰 매력을 느낍니다. "만약 이렇게 한다면...?"이라는 질문은 당신의 삶을 이끄는 원동력이며, 당신의 이야기는 사람들에게 새로운 아이디어와 신선한 관점을 선물합니다.</li>
                        <li><strong>사람들과의 진실한 연결에서 에너지를 얻습니다.</strong> 당신은 혼자 있는 것보다 다른 사람들과 함께 어울리며 영감을 주고받을 때 더욱 생기가 넘칩니다. 당신은 한 공간의 분위기를 본능적으로 감지하고, 긍정적이고 화합하는 분위기를 만드는 데 탁월한 재능이 있습니다. 사람들은 당신 곁에서 편안함과 즐거움을 느낍니다.</li>
                        <li><strong>당신의 말에는 사람을 끌어당기는 특별한 힘이 있습니다.</strong> 당신은 자신의 비전과 신념을 열정적인 언어로 풀어내어, 듣는 이의 마음속에 생생한 그림을 그려 넣을 수 있습니다. 당신이 무언가를 진심으로 믿고 이야기할 때, 그 에너지는 전염성이 강해서 주변 사람들까지 설득하고 움직이게 만듭니다.</li>
                        <li><strong>때로는 이상과 현실의 괴리감에 남몰래 아파하기도 합니다.</strong> 당신이 그리는 세상은 너무나 아름답기에, 때로 차갑고 더딘 현실의 벽에 부딪힐 때면 실망감을 느끼곤 합니다. 특히 당신이 믿었던 사람이나 아이디어가 기대에 미치지 못할 때, 그 상처는 더 깊게 느껴질 수 있습니다. 하지만 당신은 그 아픔을 딛고 다시 새로운 희망을 조준하는 사람입니다.</li>
                      </ul>
                      <h3>당신의 빛나는 강점</h3>
                      <ul>
                        <li><strong>사람에게 영감을 주는 능력:</strong> 당신의 긍정적인 에너지와 열정은 주변 사람들에게 강력한 동기를 부여하고, 잠자고 있던 가능성을 일깨웁니다.</li>
                        <li><strong>탁월한 공감과 소통 능력:</strong> 사람들의 감정을 잘 이해하고, 자신의 생각을 효과적으로 전달하여 깊은 유대감을 형성하고 갈등을 중재하는 데 능숙합니다.</li>
                        <li><strong>미래를 내다보는 비전:</strong> 현실의 제약을 넘어 새로운 가능성을 포착하고, 더 나은 미래에 대한 청사진을 제시하는 선구적인 시각을 가지고 있습니다.</li>
                      </ul>
                      <h3>성장을 위한 제언</h3>
                      <ul>
                        <li><strong>당신의 아름다운 비전에 '구체적인 지도'를 더해주세요.</strong> 당신이 쏘아 올린 가능성의 화살은 그 자체로 찬란하지만, 모두가 그 화살을 따라갈 수 있도록 이정표를 세워주는 것은 어떨까요? 당신의 위대한 비전을 작고 현실적인 단계들로 나누어 보세요. 이는 다른 사람들이 당신의 꿈을 더 쉽게 이해하고 동참하게 할 뿐만 아니라, 당신 자신에게도 꾸준히 나아갈 힘을 줄 것입니다.</li>
                        <li><strong>때로는 비판적인 목소리도 '과녁을 조정할 기회'로 삼아보세요.</strong> 당신의 열정에 찬물을 끼얹는 듯한 의견을 마주하면 마음이 상하기 쉽습니다. 하지만 모든 비판이 당신의 꿈을 부정하는 것은 아닙니다. 때로는 건강한 비판이 당신의 조준을 더욱 날카롭게 만들고, 예상치 못한 변수를 대비하게 해주는 고마운 조언이 될 수 있습니다. 이는 당신의 이상을 더욱 단단한 현실로 만드는 과정입니다.</li>
                      </ul>
                      <blockquote>세상은 당신이 쏘아 올린 가능성의 화살을 따라 움직입니다. 당신의 가장 강력한 무기는 손에 쥔 활이 아니라, 사람들의 가슴에 불을 지피는 당신의 뜨거운 열정입니다.</blockquote>`
        },
        cleric: {
            title: "성직자",
            slogan: "이해심 많은 조력자, 내면의 신념을 실천하는 수호자",
            content: `<p>당신은 폭풍우 속에서 길을 잃은 이들이 기댈 수 있는 단단한 기둥이자, 지친 마음을 위로하는 고요한 안식처와 같은 사람입니다. 마치 세상의 아픔을 위해 묵묵히 기도하는 성직자처럼, 당신의 힘은 시끄러운 외침이 아닌 조용한 이해와 진심 어린 공감에서 나옵니다. 당신은 세상의 빛과 그림자를 모두 꿰뚫어 보며, 그 속에서 자신만의 확고한 신념을 지켜나가는 내면의 수호자입니다.</p>
                      <h3>당신은 이런 사람입니다</h3>
                      <ul>
                        <li><strong>겉으로는 조용하고 온화해 보이지만, 당신의 내면에는 그 누구보다 강하고 선명한 자신만의 신념과 가치관이 자리 잡고 있습니다.</strong> 당신은 이 가치관을 다른 사람에게 강요하지는 않지만, 스스로의 삶에서 그것을 지켜내기 위해 조용히, 그리고 끈질기게 노력합니다. 이 신념이 바로 당신을 당신답게 만드는 핵심입니다.</li>
                        <li><strong>당신은 화려하게 자신의 의견을 주장하기보다, 상대방의 이야기에 깊이 귀를 기울이는 사람입니다.</strong> 당신 앞에서 사람들은 이상하게 마음이 편안해져 평소에는 하지 않던 깊은 속내를 털어놓곤 합니다. 이는 당신이 상대를 섣불리 판단하지 않고, 그 존재 자체를 온전히 존중하며 들어주기 때문입니다.</li>
                        <li><strong>모두에게 친절하지만, 당신이 진정으로 마음을 연 소수의 사람들에게는 자신의 일부를 내어줄 만큼 깊은 공감과 헌신을 보여줍니다.</strong> 당신의 마음은 아무에게나 쉽게 열리는 문이 아닙니다. 하지만 한번 당신의 세상으로 들어온 사람이라면, 그들이 가장 힘든 순간에 아무 말 없이 곁을 지켜줄 사람이 바로 당신이라는 것을 알고 있습니다.</li>
                        <li><strong>진심이 담기지 않은 피상적인 관계나, 자신의 가치관에 어긋나는 행동을 강요받을 때 남들보다 더 큰 정신적 고통을 느낍니다.</strong> 당신에게 삶은 올바른 의미와 진정성으로 채워져야 하는 성스러운 공간과 같습니다. 이 때문에 당신은 거짓과 불의에 특히 민감하며, 조용히 거리를 두는 방식으로 자신을 지켜냅니다.</li>
                      </ul>
                      <h3>당신의 빛나는 강점</h3>
                      <ul>
                        <li><strong>깊은 공감 능력과 포용력:</strong> 상대방의 아픔을 자신의 것처럼 느끼고, 있는 그대로를 받아들여주는 당신의 능력은 그 자체로 강력한 치유의 힘을 가집니다. 당신은 사람들에게 정서적인 안정감과 위로를 줍니다.</li>
                        <li><strong>확고한 내면의 신념:</strong> 유행이나 외부의 압력에 쉽게 흔들리지 않는 굳건한 가치관을 가지고 있습니다. 당신의 일관된 모습은 주변 사람들에게 조용한 신뢰감을 주며, 조직의 도덕적 중심을 잡아주는 역할을 합니다.</li>
                        <li><strong>묵묵한 헌신과 신뢰:</strong> 화려하게 드러내지 않으면서도, 자신이 중요하다고 믿는 가치나 사람을 위해 꾸준히 헌신합니다. 당신의 진심 어린 행동은 시간이 지날수록 깊은 믿음을 쌓아갑니다.</li>
                      </ul>
                      <h3>성장을 위한 제언</h3>
                      <ul>
                        <li><strong>때로는 당신 자신을 위한 기도를 먼저 올려주세요.</strong> 당신은 다른 사람의 감정을 흡수하는 능력이 뛰어나, 때로는 그들의 고통에 잠식되어 자신을 돌보는 것을 잊어버리곤 합니다. 세상의 모든 짐을 혼자 짊어질 필요는 없습니다. 당신의 마음을 지키는 단단한 경계를 세우고, 가장 먼저 스스로를 위로하고 치유하는 시간을 갖는 것을 잊지 마세요.</li>
                        <li><strong>당신의 소중한 신념을 세상에 조금 더 표현해보세요.</strong> 당신의 침묵은 깊은 이해의 표현일 때가 많지만, 때로는 오해를 낳거나 당신의 선한 의도가 묻히는 원인이 되기도 합니다. 당신의 가치관에 따라 무언가 잘못되었다고 느낄 때, 조용하지만 단호한 목소리를 내는 연습을 해보는 것은 어떨까요? 이는 세상을 더 나은 곳으로 만드는 당신만의 또 다른 방식이 될 것입니다.</li>
                      </ul>
                      <blockquote>세상은 당신의 따뜻한 마음으로 인해 치유됩니다. 당신의 가장 강력한 기적은 화려한 권능이 아니라, 사람의 마음을 진심으로 이해하고 보듬는 당신의 존재 그 자체입니다.</blockquote>`
        }
    };
    
    // --- DOM 요소 선택 ---
    const initialContent = document.getElementById('initial-content');
    const testArea = document.getElementById('test-area');
    const resultArea = document.getElementById('result-area');
    const homeTitle = document.getElementById('home-title');
    const startTestBtn = document.getElementById('start-test-btn');
    const jobCards = document.querySelectorAll('.job-card');
    const questionText = document.getElementById('question-text');
    const answerButtons = document.querySelectorAll('.answer-btn');
    const progressBar = document.getElementById('progress-bar');
    const themeButtons = document.querySelectorAll('.theme-btn');

    // --- 상태 변수 ---
    let currentQuestionIndex = 0;
    let scores = { E: 0, I: 0, T: 0, F: 0 };

    // --- 화면 전환 로직 ---
    const updateView = (viewName) => {
        initialContent.classList.add('hidden');
        testArea.classList.add('hidden');
        resultArea.classList.add('hidden');

        if (viewName === 'initial') {
            initialContent.classList.remove('hidden');
        } else if (viewName === 'test') {
            testArea.classList.remove('hidden');
        } else if (viewName === 'result') {
            resultArea.classList.remove('hidden');
        }
    };

    // --- 테마 설정 로직 ---
    const setTheme = (themeName) => {
        document.body.dataset.theme = themeName;
        localStorage.setItem('theme', themeName);
        themeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === themeName);
        });
    };

    const applyInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'nordic-noir' : 'aetherial-light');
        setTheme(savedTheme);
    };

    // --- 이미지 다운로드 로직 ---
    const downloadResultAsImage = () => {
        const resultWrapper = document.getElementById('result-content-wrapper');
        const currentTheme = document.body.dataset.theme;
        
        const options = {
            backgroundColor: currentTheme === 'aetherial-light' ? '#F8F9FA' : '#3B4252',
            scale: 2,
            useCORS: true // [중요] CORS 옵션 추가
        };

        html2canvas(resultWrapper, options).then(canvas => {
            const link = document.createElement('a');
            link.download = '나의-판타지-직업.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(err => {
            console.error("이미지 생성 오류!", err);
        });
    };

    // --- 결과 표시 로직 ---
    const showResult = (jobType) => {
        const resultData = results[jobType];
        resultArea.innerHTML = `
            <div id="result-content-wrapper">
                <div class="result-header">
                    <img src="image/${jobType}.png" alt="${resultData.title} 상징" class="result-image">
                    <h2>${resultData.title}</h2>
                    <p class="result-slogan">${resultData.slogan}</p>
                </div>
                ${resultData.content}
            </div>
            <div id="share-button-wrapper">
                <button id="download-btn" class="main-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5-.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                    <span>이미지로 공유하기</span>
                </button>
            </div>
        `;
        
        updateView('result');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        document.getElementById('download-btn').addEventListener('click', downloadResultAsImage);
    };
    
    // --- 테스트 진행 로직 ---
    const showQuestion = () => {
        const q = questions[currentQuestionIndex];
        progressBar.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
        questionText.textContent = q.q;
        answerButtons[0].innerHTML = `A. ${q.a}`;
        answerButtons[1].innerHTML = `B. ${q.b}`;
    };

    const startTest = () => {
        currentQuestionIndex = 0;
        scores = { E: 0, I: 0, T: 0, F: 0 };
        updateView('test');
        showQuestion();
        testArea.scrollIntoView({ behavior: 'smooth' });
    };

    const handleAnswer = (choice) => {
        if (currentQuestionIndex % 2 === 0) {
            if (choice === 'A') scores.E++; else scores.I++;
        } else {
            if (choice === 'A') scores.T++; else scores.F++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            calculateAndShowFinalResult();
        }
    };

    const calculateAndShowFinalResult = () => {
        const finalE_I = scores.E >= scores.I ? 'E' : 'I';
        const finalT_F = scores.T >= scores.F ? 'T' : 'F';
        
        let finalJob = 'swordsman';
        switch (finalE_I + finalT_F) {
            case 'ET': finalJob = 'swordsman'; break;
            case 'IT': finalJob = 'mage'; break;
            case 'EF': finalJob = 'archer'; break;
            case 'IF': finalJob = 'cleric'; break;
        }
        showResult(finalJob);
    };

    const showInitialScreen = () => {
        updateView('initial');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- 이벤트 리스너 연결 ---
    themeButtons.forEach(btn => btn.addEventListener('click', () => setTheme(btn.dataset.theme)));
    jobCards.forEach(card => card.addEventListener('click', () => showResult(card.dataset.job)));
    startTestBtn.addEventListener('click', startTest);
    answerButtons.forEach(button => button.addEventListener('click', (e) => handleAnswer(e.currentTarget.dataset.choice)));
    homeTitle.addEventListener('click', showInitialScreen);

    // --- 초기화 ---
    applyInitialTheme();
});