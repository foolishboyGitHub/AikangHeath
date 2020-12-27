class BaseSystem  extends BaseClass {
	public constructor() {
		super();

        GameGlobal.AllModule.push(this)
	}

	private m_Init = false

    public InitConfig() {
        if (this.m_Init) {
            return
        }
        this.m_Init = true
        this.Init()
    }

    public Init() {

    }

    public OnDayTimer() {

    }

    public OnSocketClose() {

    }
}