/**
 * 显示对象工具类
 */
class DisplayUtils {

    static shakingList = {};
    
    public static removeAllItems(target: egret.DisplayObjectContainer) {
        if (!target || target.numChildren ==0)
            return;

        while(target.numChildren>0){
            DisplayUtils.removeFromParent(target.getChildAt(0));
        }
    };
    /**
     * 从父级移除child
     * @param child
     */
    public static removeFromParent(child: egret.DisplayObject) {
        if (!child || child.parent == null)
            return;
        child.parent.removeChild(child);
    };

    static drawCir(t, e, i, s) {
        function n() {
            t.graphics.clear()
            t.graphics.beginFill(65535, 1)
            t.graphics.moveTo(0, 0)
            t.graphics.lineTo(e, 0)
            t.graphics.drawArc(0, 0, e, 0, i * Math.PI / 180, s)
            t.graphics.lineTo(0, 0)
            t.graphics.endFill()
        }
        if (t == null) {
            t = new egret.Shape();
        }
        t.graphics.clear()
        t.graphics.beginFill(65535, 1)
        t.graphics.moveTo(0, 0)
        t.graphics.lineTo(e, 0)
        t.graphics.drawArc(0, 0, e, 0, i * Math.PI / 180, s)
        t.graphics.lineTo(0, 0)
        t.graphics.endFill()
        return t;
    }

    static drawLine(t, e, i, s, n, a, r) {
        if (t == null) {
            t = new egret.Shape();
        }
        t.graphics.clear()
        t.graphics.lineStyle(a, r)
        t.graphics.moveTo(e, i)
        t.graphics.lineTo(s, n)
        t.graphics.endFill()
        return t;
    }

    private static EMPTY_FUNC = function() { return true }

    static shakeIt(target: egret.DisplayObjectContainer, range: number, time: number, count = 1, canFunc: Function = null) {
        if (canFunc == null) {
            canFunc = DisplayUtils.EMPTY_FUNC
        }

        if (target && target.$stage && (1 <= count) && canFunc()) {
            var state = DisplayUtils.shakingList[target.hashCode];
            if (!state) {
                DisplayUtils.shakingList[target.hashCode] = true;
                var o = [
                    { anchorOffsetX: 0, anchorOffsetY: -range },
                    { anchorOffsetX: -range, anchorOffsetY: 0 },
                    { anchorOffsetX: range, anchorOffsetY: 0 },
                    { anchorOffsetX: 0, anchorOffsetY: range },
                    { anchorOffsetX: 0, anchorOffsetY: 0 }
                ];
                egret.Tween.removeTweens(target);
                var h = time / 5;
                egret.Tween.get(target)
                    .to(o[0], h)
                    .to(o[1], h)
                    .to(o[2], h)
                    .to(o[3], h)
                    .to(o[4], h)
                    .call(() => {
                        delete DisplayUtils.shakingList[target.hashCode]
                        DisplayUtils.shakeIt(target, range, time, --count)
                    }, this)
            }
        }
    }

    flashingObj(t, e, i = 300) {
        var s = function () {
            if (e) {
                t.visible = !0;
                var n = 1 == t.alpha ? 0 : 1;
                egret.Tween.removeTweens(t)
                egret.Tween.get(t).to({
                    alpha: n
                }, i).call(s)
            } else {
                egret.Tween.removeTweens(t)
                t.alpha = 1
                t.visible = !1
            }
        };
        s()
    }

    private static POINT = new egret.Point

    public static SetParent(target: eui.Component, parent: eui.Component): void {
        if (!target || !parent) {
            return
        }
        let point = DisplayUtils.POINT
        let oldParent = target.parent
        if (oldParent) {
            oldParent.localToGlobal(target.x, target.y, point)
            oldParent.removeChild(target)
        } else {
            point.x = target.x
            point.y = target.y
        }
        parent.globalToLocal(point.x, point.y, point)
        parent.addChild(target)
        if (target.bottom != null) {
            target.x = point.x
            target.bottom = parent.height - point.y - target.height
        } else {
            target.x = point.x
            target.y = point.y
        }
    }

    public static ChangeParent(target: egret.DisplayObject, parent: egret.DisplayObjectContainer): void {
        if (!target || !parent) {
            return
        }
        if (target.parent) {
            target.parent.removeChild(target)
        }
        parent.addChild(target)
    }

    public static GetGlobalPos(obj: egret.DisplayObject, point: egret.Point) {
        if (!obj) {
            return
        }
        if (obj.parent) {
            obj.parent.localToGlobal(obj.x, obj.y, point)
        } else {
            point.x = obj.x
            point.y = obj.y
        }
    }

    public static ConvertPos(target: egret.DisplayObject, newTarget: egret.DisplayObject) {
        if (!target || !newTarget) {
            return
        }
        let pos = egret.$TempPoint
        this.GetGlobalPos(target, pos)
        newTarget.globalToLocal(pos.x, pos.y, pos)
        return pos
    }
}