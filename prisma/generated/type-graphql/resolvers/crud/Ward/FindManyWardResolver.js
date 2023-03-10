"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyWardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyWardArgs_1 = require("./args/FindManyWardArgs");
const Ward_1 = require("../../../models/Ward");
const helpers_1 = require("../../../helpers");
let FindManyWardResolver = class FindManyWardResolver {
    async wards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Ward_1.Ward], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWardArgs_1.FindManyWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyWardResolver.prototype, "wards", null);
FindManyWardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ward_1.Ward)
], FindManyWardResolver);
exports.FindManyWardResolver = FindManyWardResolver;
