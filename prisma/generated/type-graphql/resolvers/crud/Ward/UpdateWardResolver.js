"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateWardArgs_1 = require("./args/UpdateWardArgs");
const Ward_1 = require("../../../models/Ward");
const helpers_1 = require("../../../helpers");
let UpdateWardResolver = class UpdateWardResolver {
    async updateWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ward_1.Ward, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateWardArgs_1.UpdateWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateWardResolver.prototype, "updateWard", null);
UpdateWardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ward_1.Ward)
], UpdateWardResolver);
exports.UpdateWardResolver = UpdateWardResolver;
