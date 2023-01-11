"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPriceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyPriceArgs_1 = require("./args/FindManyPriceArgs");
const Price_1 = require("../../../models/Price");
const helpers_1 = require("../../../helpers");
let FindManyPriceResolver = class FindManyPriceResolver {
    async prices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Price_1.Price], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPriceArgs_1.FindManyPriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyPriceResolver.prototype, "prices", null);
FindManyPriceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], FindManyPriceResolver);
exports.FindManyPriceResolver = FindManyPriceResolver;
