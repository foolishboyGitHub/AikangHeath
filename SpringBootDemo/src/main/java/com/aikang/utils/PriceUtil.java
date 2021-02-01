package com.aikang.utils;

import com.aikang.Bean.GukeShopings;

public class PriceUtil {

	public static double getFinalPrice(GukeShopings sp){
		double fprice = 0;
		fprice = sp.getItembillys() * sp.getItembillzk() - sp.getItembilljm() - sp.getItembilldk();
		return fprice;
	}
}
