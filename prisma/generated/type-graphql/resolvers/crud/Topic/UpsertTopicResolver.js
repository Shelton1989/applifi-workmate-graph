"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTopicResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertTopicArgs_1 = require("./args/UpsertTopicArgs");
const Topic_1 = require("../../../models/Topic");
const helpers_1 = require("../../../helpers");
let UpsertTopicResolver = class UpsertTopicResolver {
    async upsertTopic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Topic_1.Topic, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTopicArgs_1.UpsertTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertTopicResolver.prototype, "upsertTopic", null);
UpsertTopicResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Topic_1.Topic)
], UpsertTopicResolver);
exports.UpsertTopicResolver = UpsertTopicResolver;
