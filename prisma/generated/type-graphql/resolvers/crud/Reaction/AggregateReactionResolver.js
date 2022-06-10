"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReactionArgs_1 = require("./args/AggregateReactionArgs");
const Reaction_1 = require("../../../models/Reaction");
const AggregateReaction_1 = require("../../outputs/AggregateReaction");
const helpers_1 = require("../../../helpers");
let AggregateReactionResolver = class AggregateReactionResolver {
    async aggregateReaction(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReaction_1.AggregateReaction, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReactionArgs_1.AggregateReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReactionResolver.prototype, "aggregateReaction", null);
AggregateReactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reaction_1.Reaction)
], AggregateReactionResolver);
exports.AggregateReactionResolver = AggregateReactionResolver;
