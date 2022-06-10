"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBrandResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyBrandArgs_1 = require("./args/FindManyBrandArgs");
const Brand_1 = require("../../../models/Brand");
const helpers_1 = require("../../../helpers");
let FindManyBrandResolver = class FindManyBrandResolver {
    async brands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Brand_1.Brand], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBrandArgs_1.FindManyBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyBrandResolver.prototype, "brands", null);
FindManyBrandResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brand_1.Brand)
], FindManyBrandResolver);
exports.FindManyBrandResolver = FindManyBrandResolver;
