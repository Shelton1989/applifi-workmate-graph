"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMealItemArgs_1 = require("./args/AggregateMealItemArgs");
const MealItem_1 = require("../../../models/MealItem");
const AggregateMealItem_1 = require("../../outputs/AggregateMealItem");
const helpers_1 = require("../../../helpers");
let AggregateMealItemResolver = class AggregateMealItemResolver {
    async aggregateMealItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMealItem_1.AggregateMealItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMealItemArgs_1.AggregateMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMealItemResolver.prototype, "aggregateMealItem", null);
AggregateMealItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItem_1.MealItem)
], AggregateMealItemResolver);
exports.AggregateMealItemResolver = AggregateMealItemResolver;
