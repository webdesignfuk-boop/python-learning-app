// ==========================================
// Python学習アプリ - メインJavaScript
// ==========================================

class PythonLearningApp {
    constructor() {
        this.currentLesson = null;
        this.lessons = [];
        this.progress = {
            completedLessons: [],
            totalPoints: 0,
            studyDays: 0,
            lastStudyDate: null
        };
        
        this.init();
    }

    // 初期化
    init() {
        this.loadProgress();
        this.createLessons();
        this.updateStats();
        this.setupNavigation();
        this.updateStudyDays();
    }

    // レッスンデータの作成
    createLessons() {
        this.lessons = [
            {
                id: 1,
                icon: '🏝️',
                title: 'Python島への上陸',
                description: 'Pythonの世界へようこそ！変数と出力を学ぼう',
                content: `
                    <h4>🏴‍☠️ Python島へようこそ！</h4>
                    <p>海賊よ、Pythonの冒険が始まるぞ！この島では、プログラミングの基本を学ぶ。</p>
                    
                    <h4>📜 print関数 - メッセージを伝える</h4>
                    <p><code>print()</code>関数を使うと、画面にメッセージを表示できる。これは仲間に伝言を送るようなものだ！</p>
                    <pre>print("海賊王に俺はなる！")</pre>
                    
                    <h4>💎 変数 - 宝箱にアイテムを保管</h4>
                    <p>変数は、データを保存する宝箱のようなもの。名前をつけて、後で使うことができる。</p>
                    <pre>treasure = "ワンピース"
crew_size = 10
print("宝物:", treasure)
print("仲間の数:", crew_size)</pre>
                    
                    <h4>⚔️ 実践してみよう！</h4>
                    <p>右のコードエディタで、自分の名前と夢を表示するプログラムを書いてみよう！</p>
                `,
                sampleCode: `# 君の名前を入れてみよう
name = "ルフィ"
dream = "海賊王"

print("俺の名前は", name)
print("俺の夢は", dream, "になることだ！")`,
                points: 100
            },
            {
                id: 2,
                icon: '🗺️',
                title: 'データ型の島',
                description: '数値、文字列、ブール値を理解しよう',
                content: `
                    <h4>🧭 データ型の世界</h4>
                    <p>この島では、様々な種類のデータを扱う方法を学ぶ。海の上には色々な生き物がいるように、プログラムにも色々なデータがある！</p>
                    
                    <h4>🔢 整数（int）- 数を数える</h4>
                    <p>整数は、仲間の人数や宝の数を表すときに使う。</p>
                    <pre>bounty = 1500000000  # 懸賞金
age = 19            # 年齢
print("懸賞金:", bounty, "ベリー")</pre>
                    
                    <h4>💰 浮動小数点数（float）- 小数を扱う</h4>
                    <p>小数点のある数字も扱える。船の速度や距離に便利だ。</p>
                    <pre>speed = 25.5  # ノット
distance = 100.75  # 海里
time = distance / speed
print("到着まで", time, "時間")</pre>
                    
                    <h4>📝 文字列（str）- テキストデータ</h4>
                    <p>文字列は、名前やメッセージを保存する。シングルクォートかダブルクォートで囲む。</p>
                    <pre>ship_name = "サウザンド・サニー号"
captain = '麦わらのルフィ'
print(ship_name + "の船長は" + captain)</pre>
                    
                    <h4>✅ ブール値（bool）- 真偽を判定</h4>
                    <p>TrueまたはFalseの2つの値だけ。何かが正しいか間違っているかを表す。</p>
                    <pre>is_pirate = True
has_devil_fruit = True
can_swim = False
print("海賊か？", is_pirate)
print("泳げるか？", can_swim)</pre>
                `,
                sampleCode: `# 自分の情報を入れてみよう
name = "ゾロ"
age = 21
bounty = 320000000
has_sword = True

print("名前:", name)
print("年齢:", age, "歳")
print("懸賞金:", bounty, "ベリー")
print("剣を持っている？", has_sword)`,
                points: 150
            },
            {
                id: 3,
                icon: '⚔️',
                title: '演算子の戦い',
                description: '計算と比較の方法をマスター',
                content: `
                    <h4>⚡ 演算子を使いこなせ！</h4>
                    <p>演算子は、データを操作する強力な武器だ。計算したり、比較したりできる。</p>
                    
                    <h4>➕ 算術演算子</h4>
                    <p>基本的な計算ができる演算子たち。</p>
                    <pre>power = 100
power = power + 50    # 足し算（150）
power = power - 20    # 引き算（130）
power = power * 2     # 掛け算（260）
power = power / 4     # 割り算（65.0）
power = power // 2    # 整数除算（32）
power = power % 10    # 余り（2）
power = power ** 2    # べき乗（4）

print("最終パワー:", power)</pre>
                    
                    <h4>🎯 比較演算子</h4>
                    <p>2つの値を比較して、True/Falseを返す。</p>
                    <pre>luffy_bounty = 1500000000
zoro_bounty = 320000000

print(luffy_bounty > zoro_bounty)   # True（大きい）
print(luffy_bounty < zoro_bounty)   # False（小さい）
print(luffy_bounty == zoro_bounty)  # False（等しい）
print(luffy_bounty != zoro_bounty)  # True（等しくない）</pre>
                    
                    <h4>🔗 論理演算子</h4>
                    <p>複数の条件を組み合わせる。</p>
                    <pre>is_strong = True
has_ambition = True
is_lazy = False

# and: すべてTrue
is_good_pirate = is_strong and has_ambition
print("良い海賊？", is_good_pirate)  # True

# or: どれか1つでもTrue
needs_training = is_lazy or not is_strong
print("修行が必要？", needs_training)  # False</pre>
                    
                    <h4>✨ 文字列の連結</h4>
                    <p>文字列同士を+でつなげられる。</p>
                    <pre>first_name = "モンキー・D・"
last_name = "ルフィ"
full_name = first_name + last_name
print(full_name)  # モンキー・D・ルフィ</pre>
                `,
                sampleCode: `# 懸賞金の計算をしてみよう
crew_members = 10
average_bounty = 150000000

total_bounty = crew_members * average_bounty
print("総懸賞金:", total_bounty, "ベリー")

# 目標達成チェック
goal = 1000000000
achieved = total_bounty >= goal
print("10億ベリー達成？", achieved)

# メッセージ作成
message = "麦わらの一味の総懸賞金は" + str(total_bounty) + "ベリーだ！"
print(message)`,
                points: 200
            },
            {
                id: 4,
                icon: '🌊',
                title: '条件分岐の海',
                description: 'if文で状況に応じた処理を実行',
                content: `
                    <h4>🧭 分かれ道を選択する</h4>
                    <p>航海中、様々な選択を迫られる。if文を使えば、状況に応じて異なる行動ができる！</p>
                    
                    <h4>🚢 基本のif文</h4>
                    <p>条件がTrueの時だけ、中のコードが実行される。</p>
                    <pre>weather = "晴れ"

if weather == "晴れ":
    print("航海日和だ！出航だ！")
    print("みんな準備しろ！")</pre>
                    
                    <h4>⚓ if-else文</h4>
                    <p>条件がTrueの時とFalseの時、それぞれ異なる処理をする。</p>
                    <pre>enemy_power = 8000
our_power = 9000

if our_power > enemy_power:
    print("勝てる！戦おう！")
else:
    print("今は逃げよう...")</pre>
                    
                    <h4>🗺️ if-elif-else文</h4>
                    <p>3つ以上の選択肢がある時に使う。</p>
                    <pre>bounty = 500000000

if bounty < 100000000:
    print("新人海賊だな")
elif bounty < 500000000:
    print("なかなかやるじゃないか")
elif bounty < 1000000000:
    print("強敵だ！気をつけろ！")
else:
    print("超大物海賊だ！！")</pre>
                    
                    <h4>🔱 ネストした条件分岐</h4>
                    <p>条件の中にさらに条件を入れることもできる。</p>
                    <pre>has_map = True
has_crew = True

if has_map:
    print("地図を手に入れた！")
    if has_crew:
        print("仲間もいる。冒険に出発だ！")
    else:
        print("仲間を探そう...")
else:
    print("まずは地図を手に入れないと...")</pre>
                `,
                sampleCode: `# 海賊のランクを判定しよう
bounty = 150000000  # 懸賞金を変えてみよう

if bounty >= 1000000000:
    rank = "四皇級"
    danger = "超危険"
elif bounty >= 500000000:
    rank = "大海賊"
    danger = "危険"
elif bounty >= 100000000:
    rank = "ルーキー"
    danger = "要注意"
else:
    rank = "新人"
    danger = "低危険"

print("ランク:", rank)
print("危険度:", danger)
print("懸賞金:", bounty, "ベリー")`,
                points: 250
            },
            {
                id: 5,
                icon: '🔄',
                title: 'ループの渦',
                description: '繰り返し処理をマスターしよう',
                content: `
                    <h4>🌀 繰り返しの力</h4>
                    <p>同じ作業を何度も繰り返す時、ループが役立つ。修行も、宝探しも、ループで効率化！</p>
                    
                    <h4>🔁 for文 - 回数が決まっている繰り返し</h4>
                    <p>リストの要素を順番に処理したり、決まった回数繰り返す時に使う。</p>
                    <pre># 仲間の名前を呼ぶ
crew = ["ルフィ", "ゾロ", "ナミ", "ウソップ", "サンジ"]

for member in crew:
    print(member + "！集合だ！")</pre>
                    
                    <pre># 1から10まで数える
for i in range(1, 11):
    print(i, "回目の修行！")</pre>
                    
                    <h4>♾️ while文 - 条件が続く限り繰り返す</h4>
                    <p>条件がTrueの間、ずっと繰り返す。無限ループに注意！</p>
                    <pre>power = 100
target = 1000

while power < target:
    print("現在のパワー:", power)
    power = power + 100
    
print("目標達成！パワー:", power)</pre>
                    
                    <h4>⛔ break - ループを抜ける</h4>
                    <p>特定の条件でループを途中で終了する。</p>
                    <pre>for island in range(1, 101):
    print(island, "番目の島を探索中...")
    if island == 50:
        print("ワンピースを発見！")
        break
print("冒険終了！")</pre>
                    
                    <h4>⏭️ continue - 次の繰り返しへ</h4>
                    <p>その回の処理をスキップして、次の繰り返しへ進む。</p>
                    <pre>for day in range(1, 8):
    if day == 7:
        print("日曜日は休み！")
        continue
    print(day, "日目の修行を開始")</pre>
                    
                    <h4>🔢 range関数</h4>
                    <p>数字の範囲を作る便利な関数。</p>
                    <pre>range(5)        # 0, 1, 2, 3, 4
range(1, 6)     # 1, 2, 3, 4, 5
range(0, 10, 2) # 0, 2, 4, 6, 8（2ずつ）</pre>
                `,
                sampleCode: `# 海賊団のメンバーに挨拶しよう
crew = ["ルフィ", "ゾロ", "ナミ", "ウソップ", "サンジ", 
        "チョッパー", "ロビン", "フランキー", "ブルック"]

print("=== 麦わらの一味 ===")
for i in range(len(crew)):
    member = crew[i]
    print(f"{i+1}. {member}")

print("\\n=== 修行開始！ ===")
training_count = 0
power = 0
target_power = 500

while power < target_power:
    training_count += 1
    power += 50
    print(f"{training_count}日目: パワー {power}")

print(f"\\n{training_count}日で目標達成！")`,
                points: 300
            }
        ];
    }

    // ナビゲーションの設定
    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.dataset.page;
                this.navigateTo(page);
                
                // アクティブボタンの切り替え
                navButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // ページ遷移
    navigateTo(pageName) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));
        
        const targetPage = document.getElementById(`${pageName}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        if (pageName === 'lessons') {
            this.renderLessons();
        } else if (pageName === 'progress') {
            this.renderProgress();
        }
    }

    // レッスン一覧の表示
    renderLessons() {
        const container = document.getElementById('lessons-container');
        container.innerHTML = '';
        
        this.lessons.forEach(lesson => {
            const isCompleted = this.progress.completedLessons.includes(lesson.id);
            
            const card = document.createElement('div');
            card.className = `lesson-card ${isCompleted ? 'completed' : ''}`;
            card.innerHTML = `
                <div class="lesson-icon">${lesson.icon}</div>
                <h3 class="lesson-card-title">${lesson.title}</h3>
                <p class="lesson-description">${lesson.description}</p>
                <div class="lesson-status ${isCompleted ? 'completed' : ''}">
                    ${isCompleted ? '✅ 完了' : '🔒 未完了'}
                </div>
            `;
            
            card.addEventListener('click', () => {
                this.openLesson(lesson.id);
            });
            
            container.appendChild(card);
        });
    }

    // レッスンを開く
    openLesson(lessonId) {
        const lesson = this.lessons.find(l => l.id === lessonId);
        if (!lesson) return;
        
        this.currentLesson = lesson;
        
        // レッスン内容を表示
        document.getElementById('current-lesson-title').textContent = lesson.title;
        document.getElementById('lesson-content-text').innerHTML = lesson.content;
        document.getElementById('code-editor').value = lesson.sampleCode;
        document.getElementById('code-output').textContent = 'コードを実行すると結果がここに表示されるよ！';
        
        // 進捗バーの更新
        const isCompleted = this.progress.completedLessons.includes(lesson.id);
        const progressBar = document.getElementById('lesson-progress');
        progressBar.style.width = isCompleted ? '100%' : '0%';
        
        this.navigateTo('lesson-detail');
    }

    // コードの実行（簡易版）
    runCode() {
        const code = document.getElementById('code-editor').value;
        const output = document.getElementById('code-output');
        
        try {
            // 簡易的なprint関数のシミュレーション
            let result = '';
            const printFunc = (...args) => {
                result += args.join(' ') + '\n';
            };
            
            // 安全のため、evalは使わず、シンプルな出力のみ
            // 実際のPython実行はPyodideなどが必要
            output.textContent = '🏴‍☠️ コードを実行したぞ！\n\n' +
                '※ブラウザ版では実際の実行結果は表示されません。\n' +
                '書いたコードを確認して、学習を進めよう！\n\n' +
                'あなたのコード:\n' + code;
            output.style.color = '#00ff00';
        } catch (error) {
            output.textContent = '❌ エラーが発生したぞ！\n\n' + error.message;
            output.style.color = '#ff0000';
        }
    }

    // コードのリセット
    resetCode() {
        if (this.currentLesson) {
            document.getElementById('code-editor').value = this.currentLesson.sampleCode;
            document.getElementById('code-output').textContent = 'コードをリセットしたぞ！';
        }
    }

    // レッスン完了
    completeLesson() {
        if (!this.currentLesson) return;
        
        const lessonId = this.currentLesson.id;
        
        if (!this.progress.completedLessons.includes(lessonId)) {
            this.progress.completedLessons.push(lessonId);
            this.progress.totalPoints += this.currentLesson.points;
            
            this.saveProgress();
            this.updateStats();
            
            alert(`🎉 おめでとう！\n「${this.currentLesson.title}」をクリアしたぞ！\n\n獲得ポイント: ${this.currentLesson.points}💰`);
        }
        
        // 次のレッスンへ
        this.nextLesson();
    }

    // 次のレッスン
    nextLesson() {
        if (!this.currentLesson) return;
        
        const currentIndex = this.lessons.findIndex(l => l.id === this.currentLesson.id);
        if (currentIndex < this.lessons.length - 1) {
            this.openLesson(this.lessons[currentIndex + 1].id);
        } else {
            alert('🎊 すべてのレッスンを完了したぞ！\nおめでとう、海賊王だ！');
            this.navigateTo('progress');
        }
    }

    // 前のレッスン
    previousLesson() {
        if (!this.currentLesson) return;
        
        const currentIndex = this.lessons.findIndex(l => l.id === this.currentLesson.id);
        if (currentIndex > 0) {
            this.openLesson(this.lessons[currentIndex - 1].id);
        } else {
            this.navigateTo('lessons');
        }
    }

    // 統計の更新
    updateStats() {
        document.getElementById('completed-lessons').textContent = this.progress.completedLessons.length;
        document.getElementById('total-points').textContent = this.progress.totalPoints;
        document.getElementById('study-days').textContent = this.progress.studyDays;
    }

    // 学習日数の更新
    updateStudyDays() {
        const today = new Date().toDateString();
        if (this.progress.lastStudyDate !== today) {
            this.progress.studyDays++;
            this.progress.lastStudyDate = today;
            this.saveProgress();
            this.updateStats();
        }
    }

    // 進捗画面の表示
    renderProgress() {
        this.renderAchievements();
        this.renderJourney();
    }

    // 称号の表示
    renderAchievements() {
        const container = document.getElementById('achievements-list');
        const achievements = [
            { icon: '🏴‍☠️', title: '航海開始', condition: () => this.progress.completedLessons.length >= 1 },
            { icon: '⚓', title: '冒険者', condition: () => this.progress.completedLessons.length >= 3 },
            { icon: '🗡️', title: '剣士', condition: () => this.progress.completedLessons.length >= 5 },
            { icon: '👑', title: '海賊王', condition: () => this.progress.completedLessons.length >= this.lessons.length },
            { icon: '💰', title: '宝ハンター', condition: () => this.progress.totalPoints >= 500 },
            { icon: '🔥', title: '修行者', condition: () => this.progress.studyDays >= 7 }
        ];
        
        container.innerHTML = '';
        achievements.forEach(achievement => {
            const unlocked = achievement.condition();
            const badge = document.createElement('div');
            badge.className = `achievement-badge ${unlocked ? '' : 'locked'}`;
            badge.innerHTML = `
                <div class="badge-icon">${unlocked ? achievement.icon : '🔒'}</div>
                <div class="badge-title">${achievement.title}</div>
            `;
            container.appendChild(badge);
        });
    }

    // 学習履歴の表示
    renderJourney() {
        const container = document.getElementById('journey-timeline');
        container.innerHTML = '';
        
        if (this.progress.completedLessons.length === 0) {
            container.innerHTML = '<p style="text-align:center; color:#999;">まだ冒険は始まっていない...さあ、出発しよう！</p>';
            return;
        }
        
        this.progress.completedLessons.forEach(lessonId => {
            const lesson = this.lessons.find(l => l.id === lessonId);
            if (lesson) {
                const item = document.createElement('div');
                item.className = 'timeline-item';
                item.innerHTML = `
                    <div class="timeline-date">${lesson.icon}</div>
                    <div class="timeline-content">
                        <strong>${lesson.title}</strong><br>
                        <span style="color:#666;">獲得: ${lesson.points}💰</span>
                    </div>
                `;
                container.appendChild(item);
            }
        });
    }

    // 進捗の保存
    saveProgress() {
        localStorage.setItem('pythonLearningProgress', JSON.stringify(this.progress));
    }

    // 進捗の読み込み
    loadProgress() {
        const saved = localStorage.getItem('pythonLearningProgress');
        if (saved) {
            this.progress = JSON.parse(saved);
        }
    }
}

// アプリの起動
const app = new PythonLearningApp();
