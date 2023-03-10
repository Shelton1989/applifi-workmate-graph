"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealItemOptionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMealItemOptionArgs_1 = require("./args/AggregateMealItemOptionArgs");
const MealItemOption_1 = require("../../../models/MealItemOption");
const AggregateMealItemOption_1 = require("../../outputs/AggregateMealItemOption");
const helpers_1 = require("../../../helpers");
let AggregateMealItemOptionResolver = class AggregateMealItemOptionResolver {
    async aggregateMealItemOption(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMealItemOption_1.AggregateMealItemOption, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMealItemOptionArgs_1.AggregateMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMealItemOptionResolver.prototype, "aggregateMealItemOption", null);
AggregateMealItemOptionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItemOption_1.MealItemOption)
], AggregateMealItemOptionResolver);
exports.AggregateMealItemOptionResolver = AggregateMealItemOptionResolver;
