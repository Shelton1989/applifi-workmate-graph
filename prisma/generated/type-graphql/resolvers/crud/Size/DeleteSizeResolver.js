"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteSizeArgs_1 = require("./args/DeleteSizeArgs");
const Size_1 = require("../../../models/Size");
const helpers_1 = require("../../../helpers");
let DeleteSizeResolver = class DeleteSizeResolver {
    async deleteSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Size_1.Size, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSizeArgs_1.DeleteSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteSizeResolver.prototype, "deleteSize", null);
DeleteSizeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Size_1.Size)
], DeleteSizeResolver);
exports.DeleteSizeResolver = DeleteSizeResolver;
